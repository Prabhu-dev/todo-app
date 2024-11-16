import { useState } from 'react'
import Todo from './Components/todo.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Todo/>
      </div>
    </>
  )
}

export default App
