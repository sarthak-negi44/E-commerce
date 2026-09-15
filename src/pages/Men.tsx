import products from "../assets/products";
import ProductCard from "../components/productCard";


const Men = () => {
  const menProducts = products.filter(
    (product) => product.category === "Men"
  );

  return (
    <section className="p-4">
      <h1 className="text-3xl font-bold mb-6">
        Men's Collection
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {menProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default Men;