const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();

app.use(cors());
app.use(koaBody({json: true}));

let posts = [];
let nextId = 1;

// ==============  ПЕРЕЗАГРУЗКА  ========================
var process = require('process');
var cp = require('child_process');
var fs = require('fs');

var server2 = cp.fork('server.js');
console.log('Server started');

fs.watchFile('server.js', function (event, filename) {
    server2.kill();
    console.log('Server stopped');
    server2 = cp.fork('server.js');
    console.log('Server started');
});

process.on('SIGINT', function () {
    server2.kill();
    fs.unwatchFile('server.js');
    process.exit();
});

// =======================================================

const router = new Router();

router.get('/posts', async (ctx, next) => {
    ctx.response.body = posts;
});

router.get('/posts/:id', async (ctx, next) => {
    const idGet = Number(ctx.params.id);
    const index = posts.findIndex(o => o.id === idGet);
    if (index === -1) {
        ctx.response.status = 404;       
    }
    ctx.response.body = posts[index]; 
     
});

router.post('/posts', async(ctx, next) => {
    const {id, content} = ctx.request.body;
    const now = Date.now();
    const time = new Date(now).getHours() + ':' + new Date(now).getMinutes();
console.log(time, 'TIME');
    if (id !== 0) {
        posts = posts.map(o => o.id !== id ? o : {...o, content: content});
        ctx.response.status = 204;
        return;
    }

    posts.push({...ctx.request.body, id: nextId++, created: time});
    ctx.response.status = 204;
});

// ==================================================================
// router.post('/api/services/:id', async (ctx, next) => {    
//     const id = Number(ctx.params.id);
//     const index = services.findIndex(o => o.id === id);
//     if (index === -1) {
//         ctx.response.status = 404;        
//     }
//     const newService = { ...ctx.request.body, id };
//     services[index] = newService;
    
//     ctx.response.status = 204;
// });
// =====================================================================

router.delete('/posts/:id', async(ctx, next) => {
    const postId = Number(ctx.params.id);
    const index = posts.findIndex(o => o.id === postId);
    if (index !== -1) {
        posts.splice(index, 1);
    }
    ctx.response.status = 204;
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7777;
const server = http.createServer(app.callback());
server.listen(port, () => console.log('server started'));