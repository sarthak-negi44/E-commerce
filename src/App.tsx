
import Header from './components/layouts/header'
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Shop from './pages/Shop';
import Products from './pages/Products';
import About from './pages/About';
const App = () => {
  return (
    <div>
    
   <BrowserRouter>
     <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/men' element={<Men/>}/>
                <Route path='/women' element={<Women/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App