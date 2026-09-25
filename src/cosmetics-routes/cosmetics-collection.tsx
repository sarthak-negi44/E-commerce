import CosmeticsCard from "../components/cosmeticsCard";
import cosmeticsdata from "../assets/cosmeticsdata";

const CosmeticsCollection = () => {
  return (
    <div className="min-h-screen bg-[#f5eee6] px-4 py-10">

      {/* Heading */}
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[#8a6049]">
          Beauty & Self Care
        </p>

        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-[#3b2920]">
          Cosmetics Collection
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Explore our collection of skincare, makeup, hair care and
          beauty essentials.
        </p>
      </div>

      {/* Categories */}
      <div className="mx-auto mt-8 flex max-w-6xl flex-wrap justify-center gap-3">
        <button className="rounded-full bg-[#3b2920] px-5 py-2 text-sm text-white">
          All
        </button>

        <button className="rounded-full border border-[#3b2920] px-5 py-2 text-sm text-[#3b2920]">
          Skincare
        </button>

        <button className="rounded-full border border-[#3b2920] px-5 py-2 text-sm text-[#3b2920]">
          Makeup
        </button>

        <button className="rounded-full border border-[#3b2920] px-5 py-2 text-sm text-[#3b2920]">
          Hair Care
        </button>

        <button className="rounded-full border border-[#3b2920] px-5 py-2 text-sm text-[#3b2920]">
          Body Care
        </button>
      </div>

      {/* Products */}
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cosmeticsdata.map((product) => (
          <CosmeticsCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
};

export default CosmeticsCollection;