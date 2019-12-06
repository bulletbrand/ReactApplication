import React from 'react';
import '../App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//сабмитим форму и вызывается  фетч запрос м пропса метод
//в него подставляется значение со стейта которое мы меняем при вводе в инпут текста





export default class Header extends React.Component {

 
  onSubmitHundler = (e) => {
    e.preventDefault();
   this.props.fetch(this.props.inputValue);
   console.log(e.currentTarget.value)
  }


  change = (e) => {
     this.props.changeInput(e.currentTarget.value)
    }

  render() {
    
    const { inputValue } = this.props;

  


    return (
      
      <div>

        <nav className="navbar navbar-expand-lg text-white backgroundHeader">

          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" >
            <a className="navbar-brand" href="#"><span className="border border-right-0"> <i class="fas fa-coffee"></i>
</span>KinoApi</a>
            <ul className="navbar-nav mt-2 mt-lg-0">
             
              <li className="nav-item ">
              

                <a className="nav-link mainFilms tabc tablinks main active" href="/Cards/cards"><i class="fas fa-bars"></i> Main films </a>
              </li>


              <li className="nav-item">
                <a className="nav-link favoriteFilms tab tablinks favorite" href="Favorite/favorite"><i class="fas fa-file"></i> Faforite films</a>
              </li>
            </ul>
            <form name="main-form" className="form-inline my-2 my-lg-0" onSubmit={this.onSubmitHundler}>
              <input className="form-control mr-sm-4" type="search" placeholder="Search" value={inputValue} onChange={this.change}  />
              <button className="btn btn-outline-success my-0 my-sm-2" type="submit">Search</button>
            </form>
          </div>
        </nav>
      

      </div>

    );

  }
}
