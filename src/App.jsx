import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Fashion from './components/Fashion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-white rounded-xl p-4'>Tailwind Test</h1>
      <Card />
      <Fashion />
    </>
  )
}

export default App
