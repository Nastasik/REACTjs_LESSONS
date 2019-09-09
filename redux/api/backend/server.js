const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();
app.use(cors());
app.use(koaBody({ json: true }));


// app.use(function(req, res, next) {    
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
//     next();
// });

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


let nextId = 1;
const services = [
    { id: nextId++, name: 'Замена стекла', price: 21000, content: 'Стекло оригинал от Apple'},
    { id: nextId++, name: 'Замена дисплея', price: 25000, content: 'Дисплей оригинал от Foxconn'},
    { id: nextId++, name: 'Замена аккумулятора', price: 4000, content: 'Новый на 4000 mAh'},
    { id: nextId++, name: 'Замена микрофона', price: 2500, content: 'Оригинальный от Apple'},
];

const router = new Router();

function fortune(ctx, body = null, status = 200) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.25) {
                ctx.response.status = status;
                ctx.response.body = body;
                resolve();
                return;
            }

            reject(new Error('Something bad happened'));
        }, 3 * 1000);
    })
}

router.get('/api/services', async (ctx, next) => {
    const body = services.map(o => ({id: o.id, name: o.name, price: o.price, content: o.content}));
    ctx.header="Access-Control-Allow-Origin", "http://localhost:3000";
    return fortune(ctx, body);
});
router.get('/api/services/:id', async (ctx, next) => {
    const id = Number(ctx.params.id);
    const index = services.findIndex(o => o.id === id);
    if (index === -1) {
        const status = 404;
        return fortune(ctx, null, status);
    }
    const body = services[index];
    ctx.header="Access-Control-Allow-Origin", "http://localhost:3000";
    return fortune(ctx, body);
});

// !!!!!!!!!!!!
router.post('/api/services/:id', async (ctx, next) => {
    ctx.header="Access-Control-Allow-Origin", "http://localhost:3000";
    const id = Number(ctx.params.id);
    const index = services.findIndex(o => o.id === id);
    if (index === -1) {
        const status = 404;
        return fortune(ctx, null, status);
    }
    const newService = { ...ctx.request.body, id };
    services[index] = newService;
    // services.map(o => o.id === id ? newService : o);
    
    const status = 204;
    return fortune(ctx, newService, status);
});

// !!!!!!!!!!!!!

router.post('/api/services', async (ctx, next) => {
    const id = nextId++;
    ctx.header="Access-Control-Allow-Origin", "http://localhost:3000";
    services.push({ ...ctx.request.body, id });
    const status = 204;
    return fortune(ctx, null, status);
});
router.delete('/api/services/:id', async (ctx, next) => {
    ctx.header="Access-Control-Allow-Origin", "http://localhost:3000";
    const id = Number(ctx.params.id);
    const index = services.findIndex(o => o.id === id);
    if (index === -1) {
        const status = 404;
        return fortune(ctx, null, status);
    }
    services.splice(index, 1);
    const status = 204;
    return fortune(ctx, null, status);
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());
server.listen(port);
