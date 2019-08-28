import React from 'react';
import nanoid from 'nanoid';

function SearchBar(props) {
    const links = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир', 'еще']
    return (        
        <div className = 'search-bar'>
            {links.map(link => <a href = '#7' key={nanoid()}>{link}</a>)}
        </div>
    )
}

export default SearchBar;

