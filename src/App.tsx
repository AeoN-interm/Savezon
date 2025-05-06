// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist'; // 👈 import Wishlist
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} /> {/* 👈 add this */}
      </Routes>
    </div>
  );
}

export default App;
