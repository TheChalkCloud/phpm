import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'

// const navigation = [
//   { name: 'Home', href: '/', current: false },
//   { name: 'About', href: '/about', current: false }
// ]

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
