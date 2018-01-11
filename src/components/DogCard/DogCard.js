import React from "react";
import "./DogCard.css";

// var newArray = [];

const DogCard = props => (
  <div className="card z-depth-5" onClick= {
  	() => {
  		// props.shuffleCards();
  		// props.checkArray();
  		// newArray.push(props.id);
  		// props.pushArray(props.id);
      // props.addPoints();
      props.checkArray(props.id);
      // console.log(props.checkArray(props.id));
  		}
  	}>
      <img className="waves-effect waves-light btn" alt={props.name} src={props.image} />
    
  </div>
);

export default DogCard;

  // <div className="card" onClick={() => console.log(`Id: ${props.id}`)}>

// <span onClick={() => props.removeFriend(props.id)} className="remove">
//       𝘅
// </span>