
import CosmeticProducts from '../assets/cosmeticsdata';
import ProductCard from '../components/productCard';
const haircare = () => {
 const HairProducts = CosmeticProducts.filter(
    (product) => product.category === "Hair Care"
  );

  return (
    <div className="p-4 bg-[#f5eee6] min-h-screen ">
      <h1 className="text-3xl  uppercase tracking-[0.2em] text-[#8a6049] mb-6 bg-[#f5eee6] ">Hair Care</h1>
<div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {HairProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
     
      ))}
         </div>
    </div>
  );
};

export default haircare