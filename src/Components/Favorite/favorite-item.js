import React from 'react';
import './App.css';



//мажорная деструктуризация 
const FavoriteItem = ({ elem: { name, image, summary, type },addToFavorColor }) => {

    return (
        <div className="card  m-sm-2">
            <img className="pictures" src={image.medium} alt="pictires from data" />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <h2 className="card-title">{type}</h2>
                <p className="card-text">{summary.slice(5, 70)}</p>
                <p className="btn btn-primary buttonColor" onClick={addToFavorColor} >Delete favorite</p>
                <p className="btn btn-primary ml-4 buttonColor">Info about film</p>
            </div>
        </div>
    );
}

export default FavoriteItem;
