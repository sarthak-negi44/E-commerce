import Header from './components/layouts/header';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import About from './pages/About';
import Contactus from './pages/Contactus';
import Fashion from './pages/Fashion';
import Cosmetics from './pages/Cosmatics';
import { SearchProvider } from './context/searContext';
import CosmeticsCollection from './cosmetics-routes/cosmetics-collection';
import Haircare from './cosmetics-routes/haircare';
import Makeup from './cosmetics-routes/makup';
import Bodycare from './cosmetics-routes/bodycare';
import Skincare from './cosmetics-routes/Skincare';
import Footer from './components/layouts/Footer';

const App = () => {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Header />
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/cosmetics-collection" element={<CosmeticsCollection />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/haircare" element={<Haircare />} />
          <Route path="/bodycare" element={<Bodycare />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </SearchProvider>
  );
};

export default App;