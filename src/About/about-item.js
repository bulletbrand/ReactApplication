import React, { Component } from 'react';
import '../App.css';




export default class AboutItem extends Component {
   
state = {
    visible: false
}
  
showMore = (e) => {
e.preventDefault();
this.setState(prevState=>({  
    visible:!prevState.visible
})
)
}

    render() {
        const {people} = this.props;
        const {visible} = this.state;
        const style = visible ==false?"moreInfo hide":"moreInfo show";
        const label = visible ==false? 'More info about': 'Hide info about'
        return (
         
            <div className="card  m-sm-2">
                <img className="pictures" src={people.image} />
                <div className="card-body">
                    <h4 className="card-title">{people.name}</h4>
                    <h2 className="card-title">{people.age}</h2>
                    <p className="card-text">{people.position}</p>
                    <a href="#" className="btn btn-primary ml-4 buttonColor" onClick = {this.showMore}>{label} {people.name}</a>
                    <div className = {style} >Один из лучших специалистов на проекте, более 8 лет в разработке, работал в лучших компаниях......</div>
                </div>
            </div>      

        );

    }
}
