import products from "../assets/products";
import ProductCard from "../components/productCard";
import { useSearch } from "../context/searContext";

const Men = () => {
  const { search } = useSearch();

  const menProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return product.category === "Men" && matchesSearch;
  });

  return (
    <section className="p-4 bg-[#f5eee6] min-h-screen ">
      <h1 className="text-3xl  uppercase tracking-[0.2em] text-[#8a6049] mb-6 bg-[#f5eee6] ">Men's Collection</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-[#f5eee6] text-[#3b2920]">
        {menProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Men;