import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Student(props) {

  function onClickAlert() {
    alert ("clicked");
  }

  const square = number => number * number;

  return (
      <header>
        <h1>Steve's Props Exercise</h1>
        <div id="props" border="1px" className="student" name="props" width="400">
          <div>
            Square is {square(5)}
          </div>

          <div>
            Name: {props.name}
            </div>
            <div>
           Age: {props.age}
          </div>
          <button className="favorite-btn" onClick={onClickAlert}>Click me</button>
           <div>
           {props.isStudent} 
           Student: {props.isStudent ? "Yes" : "No"}
          </div>
        </div>
        </header>
  )
}

export default Student
