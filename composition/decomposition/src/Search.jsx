import React from 'react'

function Search(props) {
    return (
        <div className = 'search'>
            <form>
                <div> 
                    <img src = "" alt = ""/>                   
                    <input type="text" name="text" value='' required/>
                    <label htmlFor="text">Найдется все. Например, фаза луны сегодня</label>
                </div>            
                <button type="submit">Найти</button>
            </form>
        </div>
    )
}

export default Search;

