import React from 'react';
import './App.css';
import CardItem from './card-item'
import PropTypes from 'prop-types';



const Cards = ({ data, addToFavorColor, changeButton }) => {

  const arrayNems = data.map(({ show, colorStatus, textInner }) => (
    <div key={show.id}>
      <CardItem show={show}
        colorStatus={colorStatus}
        addToFavorColor={() => addToFavorColor(show.id, show)} />
    </div>
  ))



  return (
    <div className="booksWrapper tabcontent">
      <div className="booksContainer container d-flex flex-wrap justify-content-center">
        {data.length ? arrayNems : 
       
        <div className="row">
            <div className="col-md-12">
                <div className="error-template">
                    <h1>
                        Oops!</h1>
                    <h2>
                        По вашему запросу фильмов не найденно</h2>
                    <div className="error-details">
                        Sorry, an error has occured, Requested page not found!
                    </div>
                    <div className="error-actions">
                        <p className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                            Take Me Home </p><p  className="btn btn-default btn-lg"><span className="glyphicon glyphicon-envelope"></span> Contact Support </p>
                    </div>
                </div>
            </div>
        </div>
    
    }
      </div>
    </div>
  );


}


export default Cards;


Cards.propTypes = {
  data: PropTypes.array.isRequired,
  addToFavorColor: PropTypes.func.isRequired,
}



