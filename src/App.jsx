import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Advice from './component/Advice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Advice/>
    </>
  )
}

export default App
