import { Link } from "react-router-dom";
import { Heart, Truck, ShieldCheck, Headphones, RotateCcw, Mail } from "lucide-react";

import Herosection from "../components/HeroSection";
import products from "../assets/products";
import blogPosts from "../assets/blog";

const Home = () => {
  // Step 4: Trending products
  const trendingProducts = products.slice(0, 5);

  // Step 2: Use your existing product images
  // so we don't introduce another set of unreliable image URLs.
  const menImage = products.find(
    (product) => product.category === "Men"
  )?.image;

  const womenImage = products.find(
    (product) => product.category === "Women"
  )?.image;

  const cosmeticsImage =
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800";

  return (
    <main className="bg-[#f5eee6]">

      {/* STEP 1 - YOUR EXISTING HERO */}
      <Herosection />


      {/* ================================================= */}
      {/* STEP 2 - SHOP BY CATEGORY */}
      {/* ================================================= */}

      <section className="px-4 py-14 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8a6049]">
              Shop By Category
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-[#3b2920] sm:text-4xl">
              Explore Our Collections
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Find what you love from our fashion and beauty collections.
            </p>
          </div>


          <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-3">

            {/* MEN */}
            <Link
              to="/men"
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={menImage}
                alt="Men's Collection"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-semibold">
                  Men's Collection
                </h3>

                <p className="mt-2 text-sm text-gray-200">
                  Trendy outfits for modern men.
                </p>

                <span className="mt-4 inline-block font-medium">
                  Shop Men →
                </span>
              </div>
            </Link>


            {/* WOMEN */}
            <Link
              to="/women"
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={womenImage}
                alt="Women's Collection"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-semibold">
                  Women's Collection
                </h3>

                <p className="mt-2 text-sm text-gray-200">
                  Stylish looks for every occasion.
                </p>

                <span className="mt-4 inline-block font-medium">
                  Shop Women →
                </span>
              </div>
            </Link>


            {/* COSMETICS */}
            <Link
              to="/cosmetics"
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={cosmeticsImage}
                alt="Cosmetics Collection"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-semibold">
                  Cosmetics Collection
                </h3>

                <p className="mt-2 text-sm text-gray-200">
                  Beauty essentials for your daily glow.
                </p>

                <span className="mt-4 inline-block font-medium">
                  Shop Cosmetics →
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>


      {/* ================================================= */}
      {/* STEP 3 - FEATURES / TRUST */}
      {/* ================================================= */}

      <section className="border-y border-[#eadbcf] bg-white px-4 py-7">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 lg:grid-cols-4">

          <div className="flex items-center gap-3">
            <Truck className="h-7 w-7 shrink-0 text-[#8a6049]" />

            <div>
              <h3 className="font-semibold text-[#3b2920]">
                Free Shipping
              </h3>

              <p className="text-xs text-gray-500">
                On orders over ₹999
              </p>
            </div>
          </div>


          <div className="flex items-center gap-3">
            <ShieldCheck className="h-7 w-7 shrink-0 text-[#8a6049]" />

            <div>
              <h3 className="font-semibold text-[#3b2920]">
                Secure Payment
              </h3>

              <p className="text-xs text-gray-500">
                100% secure checkout
              </p>
            </div>
          </div>


          <div className="flex items-center gap-3">
            <Headphones className="h-7 w-7 shrink-0 text-[#8a6049]" />

            <div>
              <h3 className="font-semibold text-[#3b2920]">
                24/7 Support
              </h3>

              <p className="text-xs text-gray-500">
                We're here to help
              </p>
            </div>
          </div>


          <div className="flex items-center gap-3">
            <RotateCcw className="h-7 w-7 shrink-0 text-[#8a6049]" />

            <div>
              <h3 className="font-semibold text-[#3b2920]">
                Easy Returns
              </h3>

              <p className="text-xs text-gray-500">
                7-day return policy
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ================================================= */}
      {/* STEP 4 - TRENDING PRODUCTS */}
      {/* ================================================= */}

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#8a6049]">
                Trending Now
              </p>

              <h2 className="mt-2 text-3xl font-semibold text-[#3b2920]">
                Popular Products
              </h2>
            </div>

            <Link
              to="/shop"
              className="hidden font-medium text-[#8a6049] hover:text-[#3b2920] sm:block"
            >
              View All →
            </Link>
          </div>


          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

            {trendingProducts.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-xl bg-[#f5eee6]"
              >

                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
                  />

                  <button
                    type="button"
                    className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow-sm"
                  >
                    <Heart className="h-4 w-4 text-[#3b2920]" />
                  </button>
                </div>


                <div className="p-4">
                  <p className="text-xs text-[#8a6049]">
                    {product.category}
                  </p>

                  <h3 className="mt-1 line-clamp-1 font-semibold text-[#3b2920]">
                    {product.name}
                  </h3>

                  <p className="mt-2 font-bold text-[#3b2920]">
                    ₹{product.price}
                  </p>
                </div>

              </div>
            ))}

          </div>


          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/shop"
              className="font-medium text-[#8a6049]"
            >
              View All Products →
            </Link>
          </div>

        </div>
      </section>


      {/* ================================================= */}
      {/* STEP 5 - BIG FASHION BANNER */}
      {/* ================================================= */}

      <section className="relative overflow-hidden">
        <img
          src={blogPosts[2]?.image}
          alt="Your Style Your Story"
          className="h-95 w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#3b2920]/65" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="max-w-lg text-white">

              <p className="text-sm uppercase tracking-[0.25em] text-[#d8c0aa]">
                Your Style
              </p>

              <h2 className="mt-2 text-4xl font-semibold sm:text-5xl">
                Your Story
              </h2>

              <p className="mt-4 max-w-md leading-7 text-gray-200">
                Discover new fashion trends and express yourself
                with confidence.
              </p>

              <Link
                to="/fashion"
                className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-medium text-[#3b2920] transition hover:bg-[#eadbcf]"
              >
                Explore Fashion →
              </Link>

            </div>
          </div>
        </div>
      </section>


      {/* ================================================= */}
      {/* STEP 6 - BLOG */}
      {/* ================================================= */}

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          <div className="flex items-end justify-between">

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#8a6049]">
                From Our Blog
              </p>

              <h2 className="mt-2 text-3xl font-semibold text-[#3b2920]">
                Fashion & Beauty Insights
              </h2>
            </div>

            <Link
              to="/blog"
              className="hidden font-medium text-[#8a6049] hover:text-[#3b2920] sm:block"
            >
              View All →
            </Link>

          </div>


          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">

            {blogPosts.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >

                <div className="h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-5">

                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[#eadbcf] px-3 py-1 text-xs text-[#3b2920]">
                      {post.category}
                    </span>

                    <span className="text-xs text-gray-500">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-[#3b2920]">
                    {post.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                    {post.excerpt}
                  </p>

                  <Link
                    to="/blog"
                    className="mt-4 inline-block text-sm font-medium text-[#8a6049]"
                  >
                    Read More →
                  </Link>

                </div>
              </article>
            ))}

          </div>

        </div>
      </section>


      {/* ================================================= */}
      {/* STEP 7 - NEWSLETTER */}
      {/* ================================================= */}

      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-2xl bg-[#eadbcf] px-6 py-10 text-center md:flex-row md:justify-between md:text-left">

          <div className="flex items-center gap-4">
            <div className="hidden rounded-full bg-[#3b2920] p-3 text-white sm:block">
              <Mail className="h-6 w-6" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8a6049]">
                Stay Updated
              </p>

              <h2 className="mt-1 text-2xl font-semibold text-[#3b2920]">
                Subscribe to Our Newsletter
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Get updates about new arrivals, offers and fashion tips.
              </p>
            </div>
          </div>


          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-l-full bg-white px-5 py-3 text-sm outline-none"
            />

            <button
              type="submit"
              className="rounded-r-full bg-[#3b2920] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#51382b]"
            >
              Subscribe
            </button>
          </form>

        </div>
      </section>

    </main>
  );
};

export default Home;