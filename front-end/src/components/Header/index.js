import React from 'react';
import './style.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

const Header = () => (

  <nav className="header__nav">
    <Link to="/home"><span className="header__logo">AlloCrew</span> </Link>
    <input className="header__toggle" type="checkbox" id="header__burger"></input>
    <label className="header__toggle-label" htmlFor="header__burger">+</label>
      <div className="header__links">
        <ul className="">
          <NavLink to="/home" ><li>Accueil</li></NavLink>
          <NavLink to="/search" ><li>Rechercher</li></NavLink>
          <NavLink to="/tchat-room" ><li>Messagerie</li></NavLink>
        </ul>
      </div>
      <div className="header__links-2">
        <ul className="">
          <Link to="/profile"><li>Voir mon profil</li></Link>
          <Link to="/edit-profile"><li>Modifier mon profil</li></Link>
          <Link to="/edit-user"><li>Parametres</li></Link>
        </ul>
    </div>
  </nav>

);

export default Header;