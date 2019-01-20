import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
	state = {
		persons: [
			{name: "Max", age: 28},
			{name: "Jon", age: 30}
		]
	}

	switchNameHandler = () => {
		// console.log("It worked");
		// this.state.persons[0] = "Belfo";
		this.setState({
			persons: [
				{name: "Arthur", age: 21},
				{name: "Kate", age: 20}
		]})
	}

	nameChangeHandler = (event) => {
		this.setState({
			persons: [
				{name: event.target.value, age: 21},
				{name: "Kate", age: 20}
		]})
	}

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
        	name={this.state.persons[0].name}
        	age={this.state.persons[0].age}
           	change={this.nameChangeHandler}>I am gay</Person>
        <Person
        	name={this.state.persons[1].name}
        	age={this.state.persons[1].age}
        	click={this.switchNameHandler} />
      </div>
    );
  }
}

export default App;
