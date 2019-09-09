import React from 'react';
import {NavLink} from 'react-router-dom';

function Menu() {
  return (
    <nav class="menu">
      <NavLink className="menu__item"  activeClassName="menu__item-active" exact to="/home">
            Главная
      </NavLink>
      <NavLink className="menu__item" activeClassName="menu__item-active" exact to="/drift">
            Дрифт-такси
      </NavLink>
      <NavLink className="menu__item" activeClassName="menu__item-active" exact to="/timeattack">
            Time Attack
      </NavLink>
      <NavLink className="menu__item" activeClassName="menu__item-active" exact to="/forza">
            Forza Karting
      </NavLink>
    </nav>
  );
}

export default Menu