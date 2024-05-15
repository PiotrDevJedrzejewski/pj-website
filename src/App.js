import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Error from './pages/Error'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import ScrollHandler from './components/ScrollHandler'
import './styles/css/main.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollHandler />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
