import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext'; // ✅ Correct import
import { Sun, Moon } from 'lucide-react'; // ✅ Only if using icons from lucide-react

const Navbar = () => {
  const { cart } = useCart();
 const { theme, toggle } = useTheme();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/60 text-white px-6 py-4 flex justify-between items-center shadow-lg border-b border-cyan-500">
      <Link to="/" className="text-2xl font-bold text-white hover:text-cyan-300 dark:text-cyan-400 transition-colors duration-300 ">
        🛒 SaveZon
      </Link>
      <div className="flex gap-6 items-center text-lg">
        <Link to="/" className="hover:text-cyan-300 transition">Home</Link>
        <Link to="/wishlist" className="hover:text-pink-400 transition">Wishlist</Link>
        <Link to="/cart" className="relative hover:text-cyan-300 transition">
          Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs animate-pulse">
              {cart.length}
            </span>
          )}
          
        </Link>

       {/* Theme toggle */}
       <button
         onClick={toggle} title="Change Theme"
         aria-label="Toggle theme"
         className="p-2 rounded-full hover:bg-white/10 transition"
       >
         {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
       </button>
      </div>
    </nav>
  );
};

export default Navbar;
