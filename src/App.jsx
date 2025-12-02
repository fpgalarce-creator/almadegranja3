import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SocialFloatingButtons from './components/SocialFloatingButtons';
import CartDrawer from './components/CartDrawer';
import About from './pages/About';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Store from './pages/Store';

const App = () => (
  <div className="min-h-screen flex flex-col bg-brand-light dark:bg-brand-dark text-brand-text dark:text-brand-light">
    <Navbar />
    <main className="flex-1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Store />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </main>
    <Footer />
    <SocialFloatingButtons />
    <CartDrawer />
  </div>
);

export default App;
