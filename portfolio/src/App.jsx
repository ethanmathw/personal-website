import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'

import Home from './pages/Home/Home';
import Experience from './pages/Experience/Experience';
import Contact from './pages/Contact/Contact';

function App() {

  return (
    <Router>
      <div>
        {/* The NavBar will be displayed on all pages */}
        <NavBar />

        {/* Define the routes for your different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
