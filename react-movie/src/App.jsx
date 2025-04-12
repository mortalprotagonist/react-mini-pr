
import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Route,Routes } from 'react-router-dom'


function App() {
 

  return (
   <main classaName="main-content">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/favorites" element={<Favorites/>}></Route>
    </Routes>
   </main>
  )
}


export default App
