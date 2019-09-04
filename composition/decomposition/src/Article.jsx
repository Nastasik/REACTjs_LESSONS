import React from 'react'
import Widgets from './Widgets';  //Компонент-контейнер для карточек Widget
import Widget from './Widget';    // Отдельная карточка
import WidgetList from './WidgetList';  //Список новостей 
import nanoid from 'nanoid';

function Article(props) {

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

    return (
            <>
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
            </>     
    )
}

export default Article

