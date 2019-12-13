
import React from 'react';
import axios from 'axios'
import {history} from '../../History'





export default class InfoAbout extends React.Component {


state = {
  infoStore:[]
}




request = () => {
  axios.get(`http://api.tvmaze.com/shows/${parseInt(history.location.pathname.replace(/\D+/g,""))}`)
  .then(res => {

    this.setState({
      infoStore: res.data
    })
  })
}


componentDidMount() {
 

this.request()
 


  }





render() {

  console.log(parseInt(history.location.pathname.replace(/\D+/g,"")))

  const {infoStore} = this.state;
  const url = "http://chto-takoe-lyubov.net/wp-content/uploads/2017/08/voprositelnyy-znak-stikhi.jpg";

  const images = (!infoStore.image) ? url : infoStore.image.medium; //так как некоторые image с API были null

  return (
    <div className="booksWrapper tabcontent">
      <div className="booksContainer container d-flex flex-wrap justify-content-center">
      <div className="card  m-sm-2">
    <img className="pictures" src={images}  alt="oops" />
    <div className="card-body">
        <h4 className="card-title">{infoStore.name}</h4>
        <h2 className="card-title">{infoStore.type}</h2>
        <p className="card-text">{infoStore.summary}</p>
        <div className="btn btn-primary buttonColor" to="/" >Add to favorite</div>
    </div>
    </div> 
    
      </div>
    </div>
  );


}

}
