import React, { Component } from "react";
import DogCard from "./components/DogCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import shuffle from "shuffle-array";

let newArray = []


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    newArray,
    points: 0
  };

  addPoints = () => {
    console.log("addPoints function below:");
    const points = this.state.points + 1;
    this.setState({points});
    console.log("points:" + points);
    console.log("========================");    
  };

  shuffleCards = () => {
    console.log("shuffleCards function below");
    const friends = shuffle(this.state.friends);
    this.setState({friends});
    console.log(friends);
    console.log("========================")
  };

  pushArray = (friend) => {
    console.log("pushArray function below:");
    newArray.push(friend);
    // this.setState({newArray});
    // console.log(this.state.friends);
    // console.log(friends.id);
    this.setState({newArray});
    console.log("newArray:" + newArray);
    console.log("========================");

  };

  checkArray = (friend) => {
   if (this.state.newArray.indexOf(friend) === -1) {
    this.addPoints();
    this.pushArray(friend);
    this.shuffleCards();
   } 
   else {
    alert("It's all over...");
    this.shuffleCards();
    this.setState({
      friends,
      newArray: [],
      points: 0
      }) 
    }
  }
  

  render() {
    return (
      <Wrapper>
        <Title
          points={this.state.points}
        />
        {this.state.friends.map(friend => (
          <DogCard
            // removeFriend={this.removeFriend}
            shuffle={this.shuffle}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
            // shuffleCards={this.shuffleCards}
            // pushArray={this.pushArray}
            // addPoints={this.addPoints}
            checkArray={this.checkArray}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
