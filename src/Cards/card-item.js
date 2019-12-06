import React, { Component } from 'react';
import '../App.css';




export default class CardItem extends Component {
   
    state = {
        colorStatus: false,
        textInner:'Add to favorite'
    }

  
    addToFavorColor = (e) => {
        e.preventDefault();
        this.setState( (state) => {
            return {
           colorStatus: !state.colorStatus,
           textInner: state.textInner =="Add to favorite" ? 'Added to favorite':"Add to favorite"
        };
        });
    };


    infoAboutColor = (e) => {
        e.preventDefault();
        alert("Unfortunately this function is not available")
    }

    render() {
    const {colorStatus, textInner} = this.state;

        const colorBtn = {
            background:colorStatus ? 'red':'black',
        }


        const url = "http://chto-takoe-lyubov.net/wp-content/uploads/2017/08/voprositelnyy-znak-stikhi.jpg";
        const { show } = this.props;
        const image = (show.image=== null||undefined) ? url : show.image.medium;
        return (
            <div className="card  m-sm-2">
                <img className="pictures" src={image}  alt="dsd" />
                <div className="card-body">
                    <h4 className="card-title">{show.type}</h4>
                    <h2 className="card-title">{show.name}</h2>
                    <p className="card-text">{show.summary.slice(35,140)}</p>
                    <a href="#" className="btn btn-primary buttonColor" style={colorBtn} onClick={this.addToFavorColor}>{textInner}</a>
                    <a href="#" className="btn btn-primary ml-4 buttonColor" onClick ={this.infoAboutColor}>Info about film</a>
                </div>
            </div>
        );

    }
}
