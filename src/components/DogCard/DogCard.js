import React from "react";
import "./DogCard.css";

var newArray = [];

const DogCard = props => (
  <div className="card" onClick= {
  	() => {
  		props.shuffleCards();
  		// props.checkArray();
  		// newArray.push(props.id);
  		props.pushArray(props.id);
  		// console.log(newArray);
  		}
  	}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    
  </div>
);

export default DogCard;

  // <div className="card" onClick={() => console.log(`Id: ${props.id}`)}>

// <span onClick={() => props.removeFriend(props.id)} className="remove">
//       𝘅
// </span>