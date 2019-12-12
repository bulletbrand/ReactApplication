import React from 'react';
import AboutItem from './about-item'

const peoples = [

    { id:1, name: "Aleks", age: "25 years", position: "Designer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkhhT1BN-TSQlBbstaSbmaBJkucXjhfhyRbgyRXfW1vwY17Hg&s" },
    { id:2, name: "Andrew", age: "35 years", position: "Developer", image: "https://salexy.kg/images/img_kg/474x354/0c/6a/0c6a6a9d4f645c57a7b6e847fbc3d829.jpg" },
    { id:3, name: "Aran", age: "29 years", position: "Sales", image: "http://resumenator.ru/wp-content/uploads/images/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82.jpg" },
    { id:4, name: "Niki", age: "36 years", position: "ProjectManager", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtVAyVMAdZilFWdsfsovfhIWgQ7H9upS1238po9V5nn-2W2dcRQ&s" },
]


const About = () => {

    const peopleArray = peoples.map((elem) => (
        <div key={elem.id}>
            <AboutItem people={elem} />
        </div>
    ));

    return (
        <div className="booksWrapper tabcontent">
            <div className="booksContainer container d-flex flex-wrap justify-content-center">
                {peopleArray}
            </div>
        </div>
    );
}

export default About;

