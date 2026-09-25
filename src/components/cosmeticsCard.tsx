type CosmeticsProduct = {
  image: string;
  name: string;
  price: number;
};

const CosmeticsCard = ({
  product,
}: {
  product: CosmeticsProduct;
}) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gray-100">

      <img
        className="w-full h-72 object-cover"
        src={product.image}
        alt={product.name}
      />

      <h3 className="mt-4 text-lg font-semibold">
        {product.name}
      </h3>

      <p className="text-xl font-bold">
        ₹{product.price}
      </p>

    </div>
  );
};

export default CosmeticsCard;