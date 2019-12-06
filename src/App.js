import React, { Component} from 'react';
import './App.css'
import Header from './Header/header'
import Cards from './Cards/cards'
import Favorite from './Favorite/favorite'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const url = 'http://api.tvmaze.com/search/shows?q=';

const query = "war"

export default class App extends Component {
 
  //определяю стейт таковым какой в зпросе ответ
  state = {
    data :[
        {show: {
           name: 'Drink Cofee',
            image: {
             original: "https://storage1a.censor.net/images/b/8/6/7/b86703fa22d362f541bde6f24e30bdd1/original.jpg" ,
            },
            id:1,
            summary: '',
            type: '',
            
          }
        },
      
    ],
    inputValue: '' 
}

  componentDidMount() {
    const { inputValue } = this.state;
    this.fetchData(inputValue);
   }

   fetchFind() {
    this.fetchData(this.inputValue);
   }
    
   fetchData = (inputValue) => {
    axios.get(`${url}${inputValue}`)  
      .then(res =>{
        console.log(res)
        this.setState({
          data: res.data
        })
      })
   
   }

  changeInput = (value) => {
    this.setState({ inputValue: value })
 }
 
    render() {
      const {data, inputValue} = this.state;
  

      return (
        
        <React.Fragment>
     
    
        <Header inputValue = {inputValue}  changeInput={this.changeInput} fetch={this.fetchData} />
        <Cards data={data}/>
      
        </React.Fragment>
       
      );
    }
  }
  
 



