
import Header from './components/layouts/header'
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home';
import Men from './components/pages/Men';
import Women from './components/pages/Women';
import Shop from './components/pages/Shop';
import Products from './components/pages/Products';
import About from './components/pages/About';
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