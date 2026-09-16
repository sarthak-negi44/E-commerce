import heroImage from "../assets/HeroImage.jpg";
import heroImage2 from "../assets/HeroImage2.jpg";
import heroImage3 from "../assets/HeroImage3.webp";
const Herosection = () => {
  return (
    <section className="w-full h-auto lg:h-96 p-3 lg:p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4 lg:h-full">

        {/* BIG LEFT IMAGE */}
        <div className="lg:col-span-2 relative overflow-hidden rounded-xl">
          <img
            src={heroImage}
            alt="Fashion"
            className="w-full h-auto lg:h-full object-contain lg:object-cover"
          />

          <div className="absolute left-5 lg:left-25 top-1/2 -translate-y-1/2 z-10">
            <p className="text-white">SPECIAL OFFER</p>

            <h1 className="text-2xl lg:text-3xl font-bold text-white">
              TRENDY
              <br />
              FASHION CLOTHES
            </h1>

            <button className="mt-3 lg:mt-4 px-4 lg:px-5 py-2 bg-white rounded-full">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-3 lg:gap-4">

          {/* IMAGE 2 */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={heroImage2}
              alt="Fashion sale"
              className="w-full h-auto lg:h-full object-contain lg:object-cover"
            />

            {/* OFFER 2 */}
            <div className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-10">
              <p className="text-xs lg:text-sm text-white">
                SPECIAL OFFER
              </p>

              <h2 className="text-lg lg:text-2xl font-bold text-white">
                25% OFF
                <br />
                EVERYTHING
              </h2>
            </div>
          </div>

          {/* IMAGE 3 */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={heroImage3}
              alt="Men collection"
              className="w-full h-auto lg:h-full object-contain lg:object-cover"
            />

            {/* OFFER 3 */}
            <div className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-10">
              <p className="text-xs lg:text-sm text-white">
                NEW COLLECTION
              </p>

              <h2 className="text-lg lg:text-2xl font-bold text-white">
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