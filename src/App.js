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
    newArray
  };

  shuffleCards = () => {
    const friends = shuffle(this.state.friends);
    this.setState({friends});
    console.log(friends);
  };

  pushArray = (friend) => {
    newArray.push(friend);
    // this.setState({newArray});
    // console.log(this.state.friends);
    console.log(friends.id);
    console.log(newArray);
    console.log("Am I broken?");
  };

  render() {
    return (
      <Wrapper>
        <Title>Doggo Memo Loggo</Title>
        {this.state.friends.map(friend => (
          <DogCard
            // removeFriend={this.removeFriend}
            shuffle={this.shuffle}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            shuffleCards={this.shuffleCards}
            pushArray={this.pushArray}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
