import ProductCard from "../components/productCard";
import products from "../assets/products";
import { useSearch } from "../context/searContext";
const Shop = () => {
  const { search } = useSearch();

  const allProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return (product.category === "Men" || product.category === "Women") && matchesSearch;
  });

  return (
    <section className="p-4 sm:p-6 lg:p-8">

      <h1 className="text-3xl font-bold mb-8">
        All Products
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {allProducts.map((product: (typeof products)[number]) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
};
export default Shop