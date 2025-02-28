
import Card from './components/Cards'
import Navbar from './components/Navbar'
import Detail from './views/Details'
import Favorites from './views/Favorites'
import Home from './views/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id/:tipo" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App