import React from 'react';
import Menu from '../img/menu.png'

const Header= (props) => (
    <div className="header">
        <img className="header__img" src={Menu}></img>
        <h1 className="header__title">{props.title}</h1>
    </div>
);

export default Header;