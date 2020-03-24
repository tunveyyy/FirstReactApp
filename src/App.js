import React, { Component} from 'react'
import Person from './Person/Person'
import './App.css'
import './Person/Person.css'

class  App extends Component {
  state = {
    person: [
      { name: "Max", age: 10 },
      { name: "Molly", age:12 },
      { name: "Bruno", age:5 }
    ],
    otherState: 'Some other value',
    displayPerson: false
  }

  switchNameHandler = (newName) => {
    this.setState({ 
      person: [
      { name: newName, age: 10 },
      { name: "Molly", age:12 },
      { name: "Qwerty", age:25}
    ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({ 
      person: [
      { name: event.target.value, age: 10 },
      { name: event.target.value, age:12 },
      { name: event.target.value, age:26}
    ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.displayPerson
    this.setState({
      displayPerson: !doesShow
    })
    
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: "1px solid blue",
      padding: "8px",
      cursor: 'pointer',
      margin: '5px'

    }
    return (
      <div className = "App">
        <h1>Hi, I am a react App</h1>
        <h2>I am being coded by a Noob ;)</h2>
        <button onClick= { () => this.switchNameHandler('Tunveyyy!!!') } style = {style}>Switch Name</button>      
        <button onClick = { this.togglePersonHandler } style = {style} > Toggle Person</button>
        {
          this.state.displayPerson ?
            <div>
              <Person 
                name = {this.state.person[0].name} 
                age = {this.state.person[0].age} 
                click = {this.switchNameHandler.bind(this,"Tanvi")}
                changed = {this.nameChangeHandler}/>
              
              <Person 
                name = {this.state.person[1].name} 
                age = {this.state.person[1].age}
                changed = {this.nameChangeHandler}>My Hobbies: farting </Person>
              
              <Person 
                name = {this.state.person[2].name} 
                age = {this.state.person[2].age}
                changed = {this.nameChangeHandler}/>
            </div> :
            <p>
              Fuck off
            </p> 
        }
      </div>
    )
  }
}

export default App;


