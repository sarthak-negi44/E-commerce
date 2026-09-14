import heroImage from "../assets/HeroImage.jpg";
import heroImage2 from "../assets/HeroImage2.jpg";
import heroImage3 from "../assets/HeroImage3.webp";

const Herosection = () => {
  return (
    <section className="w-full h-122 p-4">
      
      <div className="grid grid-cols-3 gap-4 h-full">

        {/* BIG IMAGE - LEFT */}
        <div className="col-span-2 relative overflow-hidden rounded-xl">
          <img
            src={heroImage}
            alt="Fashion collection"
            className="w-full h-full object-cover"
          />

          {/* Text over image */}
          <div className="absolute left-20 top-1/2 -translate-y-1/4 z-10">
            <p className="text-sm text-white">
              SPECIAL OFFER
            </p>

            <h1 className="text-4xl font-bold text-white mt-2">
              TRENDY
              <br />
              FASHION CLOTHES
            </h1>

            <p className="text-white mt-2">
              Spring Sale up to 30% off
            </p>

            <button className="mt-5 px-6 py-3 bg-white text-black rounded-full">
              SHOP NOW
            </button>
          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="grid grid-rows-2 gap-4">

          {/* TOP RIGHT */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={heroImage2}
              alt="Fashion sale"
              className="w-full h-full object-cover"
            />

            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
              <p className="text-white text-sm">
                SPECIAL OFFER
              </p>

              <h2 className="text-2xl font-bold text-white">
                25% OFF
                <br />
                EVERYTHING
              </h2>
            </div>
          </div>


          {/* BOTTOM RIGHT */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={heroImage3}
              alt="Men collection"
              className="w-full h-full object-cover"
            />

            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
              <p className="text-white text-sm">
                NEW COLLECTION
              </p>

              <h2 className="text-2xl font-bold text-white">
                UP TO 75% OFF
                <br />
                MEN COLLECTION
              </h2>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Herosection;