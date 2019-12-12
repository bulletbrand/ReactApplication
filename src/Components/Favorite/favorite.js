import React from 'react';
import './App.css';
import FavoriteItem from './favorite-item'


const Favorite = ({ favorStore, addToFavorColor }) => {

////поменять уловие на favorStore.length когда с СomponentDidUpdate разбирусь  и перебирать стейт а не локал
  const arrayFavor = (localStorage.getItem('favoriteStore')) ? JSON.parse(localStorage.getItem('favoriteStore')).map((elem) => (
    <div key={elem.id}>
      <FavoriteItem elem={elem}
        addToFavorColor={() => addToFavorColor(elem.id, elem)} />

    </div>
  )) : console.log("Фильмо пока что нет!(favorite.js)");
//поменять уловие на favorStore.length когда с СomponentDidUpdate разбирусь
  return (
    <div className="booksWrapper tabcontent">
      <div className="booksContainer container d-flex flex-wrap justify-content-center">
        {  arrayFavor.length ? arrayFavor :
          <div className="alert alert-danger">
            <strong className="customBt">Sorry, </strong>
            Unfortunately, there are currently no films!</div>
        }
      </div>
    </div>
  );
}

export default Favorite;




