import React, { Component} from 'react';
import '../App.css'
import CardItem from './card-item'



export default class Cards extends Component {
 
 
    render() {
    const { data } = this.props;


     const arrayNems = data.map(({show}) => (
       <div key={show.id}>
     <CardItem show={show}/>
     </div>
     ));

      return (
       
        //main
        <div className="booksWrapper tabcontent">
         <div className="booksContainer container d-flex flex-wrap justify-content-center">
              {arrayNems}
         </div>
        </div>
      );
    }
  }
  
 
