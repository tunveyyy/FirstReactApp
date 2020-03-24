import React, { Component} from 'react';
import Person from './Person/Person';
import './App.css';

class  App extends Component {
  state = {
    person: [
      { name: "Max", age: 10 },
      { name: "Molly", age:12 },
      { name: "Bruno", age:5}
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = (newName) => {
    this.setState({ person: [
      { name: newName, age: 10 },
      { name: "Molly", age:12 },
      { name: "Qwerty", age:25}
    ]
    })
  }
  render() {
    return (
      <div className = "App">
        <h1>  Hi, I am a react App</h1>
        <h2> I am being coded by a Noob ;)</h2>
        <button onClick= { this.switchNameHandler.bind(this, 'Tunveyyy') }>Switch Name</button>      
        <Person 
          name = {this.state.person[0].name} 
          age = {this.state.person[0].age} 
          click = {this.switchNameHandler.bind(this,"Tanvi")}/>
        
        <Person 
          name = {this.state.person[1].name} 
          age = {this.state.person[1].age}>My Hobbies: farting </Person>
        
        <Person name = {this.state.person[2].name} age = {this.state.person[2].age}/>
      </div>
    )
  }
}

export default App;


