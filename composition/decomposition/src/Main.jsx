import React from 'react'
import Widget from './Widget';    // Отдельная карточка
import WidgetList from './WidgetList';  //Список новостей 
import nanoid from 'nanoid';

function Main(props) {
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
        <>
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
        </>
    )
}

export default Main

