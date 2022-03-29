import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../components/Home';
import Header from '../components/Header';
import About from '../components/About';
import Products from '../components/Products';
import Footer from '../components/Footer';

const Routings = () => (
  <Router>
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </main>
  </Router>
);

export default Routings;
