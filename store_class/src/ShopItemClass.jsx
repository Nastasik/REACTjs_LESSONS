import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {User} from './User.js';

export default class ShopItemClass extends Component {
  static propTypes = {
    user: PropTypes.instanceOf(User).isRequired
  }

  render() {
    const {user} = this.props;

    return (
      <div className = "main-content">
        <h2>{user.brand}</h2>
        <h1>{user.title}</h1>
        <h3>{user.description}</h3>
        <div className = "description">
          {user.descriptionFull}
        </div>
        <div className = "highlight-window mobile"><div className = "highlight-overlay"></div></div>
        <div className = "divider"></div>
        <div className = "purchase-info">
          <div className = "price">{user.currency}{user.price}</div>
          <button>Добавить в корзину</button>
        </div>
    </div>
    )
  }

}
