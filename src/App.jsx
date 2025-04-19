import { useState } from 'react'

import './App.css'
import Heading from './Components/Heading'
import Cards from './Components/Cards'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Heading/>
     <Cards/>
    </>
  )
}

export default App
