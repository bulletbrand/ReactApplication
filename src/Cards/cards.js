import React, { Component} from 'react';
import '../App.css'
import CardItem from './card-item'


//info
//Тут находится сама обертка для карточек в которую подставляется карточка с другого файла, работает так 
//передаю стейт с аппа в нужный компонент пропсом а потом вызываю и используя деструктурирую
//в єтом компоненте візівается другой тоже пропсом єто сами карточки которые подставляются в зависимости от кол-во ответа



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
  
 
