import { Link } from "react-router-dom";
import fashionCollections from "../assets/fashiondata";
import products from "../assets/products";

const Fashion = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <main className="min-h-screen bg-[#f5eee6]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#d8c0aa] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#8a6049]">
              Discover Your Style
            </p>

            <h1 className="mt-4 text-5xl font-semibold leading-tight text-[#3b2920] sm:text-6xl">
              Define Your
              <br />
              Own Style
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-700">
              Discover timeless fashion, modern trends and everyday pieces
              designed to make your personal style stand out.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-block rounded-full bg-[#3b2920] px-7 py-3 font-medium text-white transition hover:bg-[#51382b]"
            >
              Shop Fashion
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000"
              alt="Fashion collection"
              className="h-105 w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Collections */}
      <section className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8a6049]">
              Explore
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-[#3b2920] sm:text-4xl">
              Featured Collections
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Find the right look for every moment, from everyday outfits
              to special occasions.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {fashionCollections.map((collection) => (
              <div
                key={collection.id}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold">
                    {collection.title}
                  </h3>

                  <p className="mt-2 max-w-md text-sm text-gray-200">
                    {collection.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Trending Products */}
      <section className="bg-white px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#8a6049]">
                Trending Now
              </p>

              <h2 className="mt-2 text-3xl font-semibold text-[#3b2920]">
                Popular Styles
              </h2>
            </div>

            <Link
              to="/shop"
              className="font-medium text-[#8a6049] hover:text-[#3b2920]"
            >
              View All →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-xl bg-[#f5eee6]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-5">
                  <p className="text-sm text-[#8a6049]">
                    {product.category}
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-[#3b2920]">
                    {product.name}
                  </h3>

                  <p className="mt-2 font-bold text-[#3b2920]">
                    ₹{product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Style Guide */}
      <section className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#3b2920] px-6 py-14 text-center text-white sm:px-12">

          <p className="text-sm uppercase tracking-[0.2em] text-[#d8c0aa]">
            Style Guide
          </p>

          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Fashion for Every Moment
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            From relaxed everyday outfits to polished formal looks,
            discover pieces that fit your lifestyle.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-white/30 px-5 py-2">
              Everyday
            </span>

            <span className="rounded-full border border-white/30 px-5 py-2">
              Work
            </span>

            <span className="rounded-full border border-white/30 px-5 py-2">
              Weekend
            </span>

            <span className="rounded-full border border-white/30 px-5 py-2">
              Special Occasions
            </span>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 text-center">
        <h2 className="text-3xl font-semibold text-[#3b2920]">
          Ready to Find Your Style?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          Explore our latest fashion collection and find something
          that feels like you.
        </p>

        <Link
          to="/shop"
          className="mt-7 inline-block rounded-full bg-[#3b2920] px-8 py-3 font-medium text-white transition hover:bg-[#51382b]"
        >
          Explore Collection
        </Link>
      </section>

    </main>
  );
};

export default Fashion;