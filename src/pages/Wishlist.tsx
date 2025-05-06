import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-950 dark:text-pink-400 px-10 py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold mb-10 ">Your Wishlist ❤️</h1>
        <h1 className="text-1xl mb-2 text- center font- bold">Saved products you love</h1>
        <p className="text-gray-400 text-md "></p>
      </div>

      {wishlist.length === 0 ? (
        <div className=" bg-white text-black dark:bg-gray-950 dark:text-pink-400 transition-colors duration-300 text-center">Your wishlist is empty.</div>
      ) : (
        <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
