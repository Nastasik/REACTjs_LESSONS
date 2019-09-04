import React from 'react';
import SearchBar from './SearchBar';  //Фильтры поиска
import Search from './Search'; //Форма поиска
import Main from './Main';
import Article from './Article';

function Page(props) {    

    return (       
        <div className = 'page'>
            <Main>{props.children}</Main>
            <SearchBar>{props.children}</SearchBar>
            <Search>{props.children}</Search>            
            <Article>{props.children}</Article>   
        </div>
    )
}

export default Page;

