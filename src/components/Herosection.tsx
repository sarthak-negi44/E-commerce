import heroImage from "../assets/HeroImage.avif";

const Herosection = () => {
  return (
    <section className="relative w-full h-122 overflow-hidden bg-cover bg-center bg-no-repeat">

      {/* Hero Image */}
      <img
        src={heroImage}
        alt="Fashion collection"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Offer Content */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 z-20">
        <div className="p-8 bg-transparent">

          <p className="text-sm text-white">
            SPECIAL OFFER
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white">
            25% OFF
            <br />
            EVERYTHING
          </h1>

          <p className="mt-2 text-white">
            Shop our latest collection
          </p>

          <button className="mt-5 px-6 py-3 bg-gray-900 text-white">
            SHOP NOW
          </button>

        </div>
      </div>

    </section>
  );
};

export default Herosection;