import React from 'react';
import './App.css';

import { Link } from 'react-router-dom'


const Header = ({ inputValue, toFetch, changeInput }) => {

  const onSubmitHundler = (e) => {
    e.preventDefault();
    toFetch(inputValue);
  }

  const change = (e) => {
    changeInput(e.currentTarget.value)
  }

  //if (активный класс такой то то включать formHide а если нет то не включать)

  return (
    <div>
      <nav className="navbar navbar-expand-lg text-white backgroundHeader">
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" >
          <p className="navbar-brand"><span className="border border-right-0"> <i className="fas fa-coffee"></i>
          </span>KinoApi</p>
          <ul className="navbar-nav mt-2 mt-lg-0">

            <li className="nav-item ">
              <Link className="nav-link mainFilms tabc tablinks main active" to="/"><i className="fas fa-bars"></i> Main films </Link >
            </li>


            <li className="nav-item">
              <Link className="nav-link favoriteFilms tab tablinks favorite" to="/favorite"><i className="fas fa-file"></i> Faforite films</Link >
            </li>

            <li className="nav-item">
              <Link className="nav-link favoriteFilms tab tablinks about" to="/about"><i className="fas fa-cloud"></i> About us</Link >
            </li>

          </ul>
          <form name="main-form" className="form-inline my-2 my-lg-0" onSubmit={onSubmitHundler}>
            <input className="form-control mr-sm-4" type="search" placeholder="Search" value={inputValue} onChange={change} />
            <button className="btn btn-outline-success my-0 my-sm-2" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
