import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'



const url = "http://chto-takoe-lyubov.net/wp-content/uploads/2017/08/voprositelnyy-znak-stikhi.jpg";



const CardItem = ({ show, addToFavorColor, colorStatus,addInfo }) => {


    const colorBtn = { background: colorStatus ? 'red' : 'black' }
    const label = colorStatus ? 'Added to favorite' : 'Add to favorite'
console.log("Color status",colorStatus)
//изьяны когда значение summary либо image = null в апи
    const images = (!show.image) ? url : show.image.medium; //так как некоторые image с API были null
    const summary = (!show.summary) ? "Сраный русский фильм" : show.summary.slice(0, 100).replace(/<[^>]+>/g,'');



    return (
        <div className="card  m-sm-2">
            <img className="pictures" src={images} alt="dsd" />
            <div className="card-body">
                <h5 className="card-title">{show.type}</h5>
                <h4 className="card-title">{show.name}</h4>
                <p className="card-text">{summary}...</p>
                <Link className="btn btn-primary buttonColor" to="/" style={colorBtn} onClick={addToFavorColor}>{label}</Link>
                <Link className="btn btn-primary ml-4 buttonColor"
                 to={`/moreInfo/${show.id}`}>
                Info about film</Link >
            </div>
        </div>
    );
}

export default CardItem;

CardItem.propTypes = {
    show: PropTypes.object.isRequired,
    addToFavorColor: PropTypes.func.isRequired,
}




