import React from 'react';
import './App.css';



//мажорная деструктуризация 
const FavoriteItem = ({ elem: { name, image, summary, type }, addToFavorColor }) => {

    const url = "http://chto-takoe-lyubov.net/wp-content/uploads/2017/08/voprositelnyy-znak-stikhi.jpg";
    const imagesq = (!image) ? url : image.medium; //так как некоторые image с API были null
    const summaryq = (!summary) ? "Сраный русский фильм" : summary.slice(0,150).replace(/<[^>]+>/g,'');

    return (
        <div className="card  m-sm-2">
            <img className="pictures" src={imagesq} alt="pictires from data" />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <h2 className="card-title">{type}</h2>
                <p className="card-text">{summaryq}</p>
                <p className="btn btn-primary buttonColor favoriteBtn" onClick={addToFavorColor} >Delete favorite</p>
                <p className="btn btn-primary ml-4 buttonColor">Info about film</p>
            </div>
        </div>
    );
}

export default FavoriteItem;
