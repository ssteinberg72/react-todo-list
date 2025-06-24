/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/

function Food() {
  /*const [count, setCount] = useState(0)*/

  const food1 = "Hamburgers";
  const food2 = "Hot Dogs";

  return (
      <header>
        <h1>Steve's Food Selections</h1>
        <div id="foodSelections" border="1px" name="FoodSelections" width="400">
          <div>
            {food1}
            </div>
            <div>
            {food2.toUpperCase()}
          </div>
        </div>
        </header>
  )
}

export default Food
