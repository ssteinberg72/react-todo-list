
import reactLogo from './assets/react.svg'
import ProfilePic from './assets/react.svg'
import './App.css'

function Card() {
  /*const [count, setCount] = useState(0)*/

  const food1 = "Hamburgers";
  const food2 = "Hot Dogs";

  return (
     <div className="card">
      <img src="{ProfilePic}" alt="profile picture"></img>
      <h2>steven's code</h2>
      <p>I make pizza</p>
     </div> 
  );
}

export default Card
