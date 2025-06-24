import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Student from './Student.jsx'
import ProfilePic from './assets/steven-steinberg-profile.jpg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <Food />
    <Card />
     <Student name="SpongeBob" age="40" isStudent="{false}" />
  </StrictMode>,
)
