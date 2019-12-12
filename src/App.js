import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header/header'
import Cards from './Components/Cards/cards'
import Favorite from './Components/Favorite/favorite'
import About from './Components/About/about'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const url = 'http://api.tvmaze.com/search/shows?q=';




export default class App extends Component {


  state = {
    data: [
      {
        show: {
          name: '',
          image: {
            medium: "https://storage1a.censor.net/images/b/8/6/7/b86703fa22d362f541bde6f24e30bdd1/original.jpg",
          },
          id: 1,
          summary: '',
          type: '',
        },
        colorStatus:false,

      },

    ],
    inputValue: '',
    favorStore: [],
  }




  

  










  addToFavorColor = (id, show) => {


    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.show.id === id)

      const oldItem = data[idx];
      const newItem = { ...oldItem, colorStatus: !oldItem.colorStatus }

     return [                       //вернуть с новым свойством конкретный елемент в стейт а не все!! вот в чем прикол
        ...data.slice(0, idx),
        newItem,
        ...data.slice(idx + 1)
      ];

    })



        console.log("favoriteStore", localStorage.getItem('favoriteStore'));

        if (!localStorage.getItem('favoriteStore')) {
          localStorage.setItem('favoriteStore', '[]');
        }


        const arrMovieFavorite = JSON.parse(localStorage.getItem('favoriteStore'));


        var positionMovie;
        if (arrMovieFavorite.length) {
          positionMovie = arrMovieFavorite.findIndex(el => el.id === id);

        } else {
          positionMovie = -1;
        }

        if (positionMovie !== -1) {
          arrMovieFavorite.splice(positionMovie, 1);
          localStorage.setItem('favoriteStore', JSON.stringify(arrMovieFavorite));
         //alert(`Фильм ${show.name} был удален из избранного!`);
          return;
        }

        arrMovieFavorite.push(show)
        localStorage.setItem('favoriteStore', JSON.stringify(arrMovieFavorite))

        return;
      }




  componentDidMount() {

        this.setState({
          favorStore: JSON.parse(localStorage.getItem("favoriteStore"))
        })

    if(!localStorage.getItem('data')) {
      this.fetchData(this.state.inputValue);
    } else {
      this.setState({
        data: JSON.parse(localStorage.getItem("data")),
      })
    }
  }


  /*
  
    componentDidUpdate(prevProps,prevState) {
      if (prevState.favorStore === this.state.favorStore){
      this.setState({
        favorStore: JSON.parse(localStorage.getItem("favoriteStore"))
      })
    }
    
    }
    */
  fetchData = (inputValue) => {

    axios.get(`${url}${inputValue}`)
      .then(res => {

        this.setState({
          data: res.data
        })
        localStorage.setItem('data', JSON.stringify(res.data))
      })
  }


  changeInput = (value) => {
    
    this.setState({ inputValue: value })
  }


  render() {
    const { data, inputValue, favorStore } = this.state;

    return (

      <React.Fragment>

        <Router>
          <Header inputValue={inputValue} changeInput={this.changeInput} toFetch={this.fetchData}
            colorStatus={this.state.colorStatus} textInner={this.state.textInner} />

          <Switch>
            <Route exact path="/" render={() => <Cards data={data} addToFavorColor={this.addToFavorColor}
              colorStatus={this.state.colorStatus} textInner={this.state.textInner} />} />

            <Route exact path="/favorite" render={() => <Favorite favorStore={favorStore} addToFavorColor={this.addToFavorColor} />} />

            <Route exact path="/about" component={About} />
          </Switch>
        </Router>

      </React.Fragment>
    );
  }
}


