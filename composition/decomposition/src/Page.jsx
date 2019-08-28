import React from 'react';
import Widgets from './Widgets';  //Компонент-контейнер для карточек Widget
import Widget from './Widget';    // Отдельная карточка
import WidgetList from './WidgetList';  //Список новостей 
import nanoid from 'nanoid';
import SearchBar from './SearchBar';  //Фильтры поиска
import Search from './Search'; //Форма поиска

function Page(props) {
    const weather = [{
        category: 'Погода',
        src: '',
        morning: '+17',
        day: '+20',
        now: '+17°'
    }]
    
    const visited = [{
        category: 'Посещаемое',
        title: 'Недвижимость',
        desription: '- о сталинках'
    } , {
        category: 'Посещаемое',
        title:'Маркет',
        desription: ' - люстры и светильники'
    }, {
        category: 'Посещаемое',
        title: 'Авто.ру',
        desription: '- привод 4х4 до 500 000'
        }
    ]

    const map = [{
        category: 'Карта Германии',
        desription: 'Расписание'
        }
    ]

    const tvProgramm = [{
            category: 'Телепрограмма',
            time: '02:00',
            desription: 'THT.Best',
            channel: 'THT International'
        }, {
            category: 'Телепрограмма',
            time: '02:15',
            desription: 'Джинглики',
            channel: 'Карусель'
        }, {
            category: 'Телепрограмма',
            time: '02:25',
            desription: 'Наедине со всеми',
            channel: 'Первый'
         }
    ]

    const live = [{
        category: 'Эфир',
        src: '',
        desription: 'Управление как искусство',
        channel: 'Успех'
        }, {
        category: 'Эфир',
        src: '',
        desription: 'Ночь. Мир вэтовремя',
        channel: 'earthTV'
         }, {
        category: 'Эфир',
        src: '',
        desription: 'Андрей Возн...',
        channel: 'Совершенно секретно'
        }
    ]

    const news = [{
        category: 'Сейчас в СМИ',
        src: '',
        desription: 'Путин упростил получение автомобильных номеров'
        }, {
        category: 'Сейчас в СМИ',
        src: '',
        desription: 'В команде Зеленского раскрыли план реформ на Украине'
        }, {
        category: 'Сейчас в СМИ',
        src: '',
        desription: 'Турпомощь прокомментировала гибель россиян в Анталье'
        }, {
        category: 'Сейчас в СМИ',
        src: '',
        desription: 'Суд закрыл дело Демпартии США против России'
        }, {
        category: 'Сейчас в СМИ',
        src: '',
        desription: 'На Украине призвали создать ракеты для удара по Москве'
        }
    ]

    const errorHandling = [{
        category: 'Работа над ошибками',
        desription: 'Смотрите на Яндексе и запоминайте'
    }]

    const businessNews = [{
        currency1: 'USD',
        currency2: 'MOEX',
        value: 63.52,
        trend: '+0.09',
        }, {
        currency1: 'EUR',
        currency2: 'MOEX',
        value: 70.86,
        trend: '+0.14',
        }, {
        currency1: 'НЕФТЬ',        
        value: 64.90,
        trend: '+1.63',
        },
    ]

    return (       
        <div className = 'page'>
            <div className = 'main-news'>
                <Widget {...news} key={nanoid()}> 
                    <a href = '#3'>В Германии</a>
                    <a href = '#4'>Рекомендуем</a>
                    <p className ='main-news-time'>31 июля, среда 02.32</p>               
                    <WidgetList {...news}>
                        {props.children}                    
                    </WidgetList>            
                </Widget>
                <Widget {...errorHandling} key={nanoid()}>   
                    <label className = 'error-handling-img'><img src = '' alt =''/></label>         
                    <WidgetList {...errorHandling}>{props.children}</WidgetList>            
                </Widget> 
            </div>   
           
            <WidgetList {...businessNews}>{props.children}</WidgetList> 
            <SearchBar>{props.children}</SearchBar>
            <Search>{props.children}</Search>            
            
            <Widgets>            
                <Widget key={nanoid()} {...weather}>  
                    <div className = 'weather'>           
                        <label><img src = {weather[0].src} alt =''/></label>
                        <p>{weather[0].now}</p>
                        <p>Утром {weather[0].morning}, <br/>днем {weather[0].day}</p> 
                    </div>              
                </Widget>
                <Widget {...visited} key={nanoid()}>                
                    <WidgetList {...visited}>{props.children}</WidgetList>            
                </Widget>
                <Widget {...map} key={nanoid()}>                
                    <WidgetList {...map}>{props.children}</WidgetList>
                </Widget>
                <Widget {...tvProgramm} key={nanoid()}>                                
                    <WidgetList {...tvProgramm}>{props.children}</WidgetList>  
                    <button className='tv-btn' href = '#'>Эфир</button>          
                </Widget>
                <Widget {...live} key={nanoid()}>                
                    <WidgetList {...live}>{props.children}</WidgetList>
                </Widget>
            </Widgets>           
        </div>
    )
}

export default Page;

