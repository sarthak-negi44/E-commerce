
const About = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12">

      {/* Introduction */}
      <section className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-bold mb-4">
          About Us
        </h1>

        <p className="mx-auto max-w-2xl text-gray-600 text-lg">
          Fashion that fits your style. We bring stylish, comfortable,
          and affordable clothing together in one simple shopping experience.
        </p>
      </section>

      {/* Our Story */}
      <section className="mx-auto mt-16 max-w-5xl grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Our Story
          </h2>

          <p className="text-gray-600 leading-7">
            We started with a simple idea — make fashion easier and more
            accessible. Our goal is to provide modern clothing that looks
            great, feels comfortable, and fits different styles.
          </p>
        </div>

        <div className="rounded-2xl bg-amber-50 p-10 text-center z-auto">
          <span className="text-6xl">👕</span>
          <h3 className="mt-4 text-xl font-semibold">
            Fashion For Everyone
          </h3>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto mt-16 max-w-5xl text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Our Mission
        </h2>

        <p className="mx-auto max-w-2xl text-gray-600 leading-7">
          Our mission is to provide quality fashion at affordable prices
          while making online shopping simple, enjoyable, and convenient.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto mt-16 max-w-5xl">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border p-6 text-center shadow-sm shadow-gray-400">
            <h3 className="font-semibold text-lg mb-2">
              Quality
            </h3>
            <p className="text-gray-600 text-sm">
              Carefully selected products for everyday style.
            </p>
          </div>

          <div className="rounded-2xl border p-6 text-center shadow-sm shadow-gray-400">
            <h3 className="font-semibold text-lg mb-2">
              Affordable
            </h3>
            <p className="text-gray-600 text-sm">
              Stylish fashion without unnecessary high prices.
            </p>
          </div>

          <div className="rounded-2xl border p-6 text-center shadow-sm shadow-gray-400">
            <h3 className="font-semibold text-lg mb-2">
              Easy Shopping
            </h3>
            <p className="text-gray-600 text-sm">
              A simple and convenient shopping experience.
            </p>
          </div>

          <div className="rounded-2xl border p-6 text-center shadow-sm shadow-gray-400">
            <h3 className="font-semibold text-lg mb-2">
              Customer First
            </h3>
            <p className="text-gray-600 text-sm">
              We focus on making every shopping experience better.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-16 max-w-5xl rounded-3xl bg-amber-50 p-10 text-center">
        <h2 className="text-3xl font-semibold mb-3">
          Find Your Style
        </h2>

        <p className="text-gray-600 mb-6">
          Explore our latest collection and discover something you love.
        </p>

        <a
          href="/shop"
          className="inline-block rounded-full bg-black px-7 py-3 text-white transition hover:bg-gray-800"
        >
          Shop Now
        </a>
      </section>

    </div>
  );
};



export default About