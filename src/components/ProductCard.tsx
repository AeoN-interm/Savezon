import { Product } from '../context/CartContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Heart, HeartOff } from 'lucide-react';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-gray-700">
      
      {/* Wishlist Heart Icon */}
      <button
        onClick={() => toggleWishlist(product)}
        className="absolute top-3 right-3 text-pink-400 hover:text-pink-300 transition"
      >
        {isInWishlist ? <HeartOff size={20} /> : <Heart size={20} />}
      </button>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mx-auto mb-4 drop-shadow"
      />
      
      {/* Product Title */}
      <h2 className="text-lg font-semibold text-white mb-2 line-clamp-2">
        {product.title}
      </h2>
      
      {/* Product Price */}
      <p className="text-cyan-400 font-medium mb-3 text-md">${product.price}</p>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2 px-4 rounded-xl transition duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
