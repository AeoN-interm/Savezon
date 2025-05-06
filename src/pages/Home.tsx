import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import { Product } from "../context/CartContext";
import PaymentButton from "../components/PaymentButton";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetching products on component mount
  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  // Get unique categories from products
  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))] ;

  // Filtering products by category
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white px-6 py-10 transition-colors duration-300">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Explore Our Products</h1>
        <p className="text-xl mb-5">Browse our premium collection of gadgets, fashion & more.</p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === category
                ? "bg-cyan-500 text-black border-cyan-500"
                : "bg-gray-800 text-white border-gray-600"
            } hover:bg-cyan-600 hover:text-black transition`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {loading ? (
        <div className="text-center text-cyan-400 text-lg">Loading products...</div>
      ) : (
        <>
          <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Payment Section */}
          <div className="mt-16 max-w-md mx-auto">
            <PaymentButton totalPrice={filteredProducts.reduce((sum, p) => sum + p.price, 0)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
