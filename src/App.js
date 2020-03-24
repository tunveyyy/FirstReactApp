import React, {useState} from 'react';
import Person from './Person/Person';
import './App.css';

const App = props => {
  const [personState, setPersonState] = useState({
    person: [
      { name: "Max", age: 10 },
      { name: "Molly", age:12 },
      { name: "Bruno", age:5}
    ],
    otherState: 'Some other value'
  })

  const switchNameHandler = () => {
    setPersonState({ person: [
      { name: "Maximilian", age: 10 },
      { name: "Molly", age:12 },
      { name: "Qwerty", age:25}
    ]

  } )
  }
  
    return (
      <div className = "App">
        <h1>  Hi, I am a react App</h1>
        <h2> I am being coded by a Noob ;)</h2>
        <button onClick= { switchNameHandler }>Switch Name</button>      
        <Person name = {personState.person[0].name} age = {personState.person[0].age} click = {switchNameHandler}/>
        <Person name = {personState.person[1].name} age = {personState.person[1].age}>My Hobbies: farting </Person>
        <Person name = {personState.person[2].name} age = {personState.person[2].age}/>
      </div>
    )
}
export default App;


