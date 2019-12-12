import React from 'react';
import './App.css';
import PropTypes from 'prop-types';



const url = "http://chto-takoe-lyubov.net/wp-content/uploads/2017/08/voprositelnyy-znak-stikhi.jpg";



const CardItem = ({ show, addToFavorColor, colorStatus }) => {


    const colorBtn = { background: colorStatus ? 'red' : 'black' }
    const label = colorStatus ? 'Added to favorite' : 'Add to favorite'


    const images = (show.image === null || undefined) ? url : show.image.medium; //так как некоторые image с API были null

    return (
        <div className="card  m-sm-2">
            <img className="pictures" src={images} alt="dsd" />
            <div className="card-body">
                <h5 className="card-title">{show.type}</h5>
                <h4 className="card-title">{show.name}</h4>
                <p className="card-text">{show.summary.slice(0, 100).replace(/<[^>]+>/g,'')}...</p>
                <p className="btn btn-primary buttonColor" style={colorBtn} onClick={addToFavorColor}>{label}</p>
                <p className="btn btn-primary ml-4 buttonColor">Info about film</p>
            </div>
        </div>
    );
}

export default CardItem;

CardItem.propTypes = {
    show: PropTypes.object.isRequired,
    addToFavorColor: PropTypes.func.isRequired,
}




