import blogPosts from "../assets/blog";

const Blog = () => {
  return (
    <main className="min-h-screen bg-[#f5eee6] px-4 py-12">
      
      {/* Header */}
      <section className="mx-auto max-w-6xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[#8a6049]">
          Our Journal
        </p>

        <h1 className="mt-2 text-4xl font-semibold text-[#3b2920] sm:text-5xl">
          Fashion & Beauty Blog
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Discover fashion ideas, beauty tips, skincare guides and simple
          inspiration for your everyday style.
        </p>
      </section>

      {/* Blog Cards */}
      <section className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image */}
            <div className="h-56 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#eadbcf] px-3 py-1 text-xs font-medium text-[#3b2920]">
                  {post.category}
                </span>

                <span className="text-xs text-gray-500">
                  {post.date}
                </span>
              </div>

              <h2 className="mt-4 text-xl font-semibold text-[#3b2920]">
                {post.title}
              </h2>

              <p className="mt-3 leading-6 text-gray-600">
                {post.excerpt}
              </p>

              <button className="mt-5 font-medium text-[#8a6049] transition hover:text-[#3b2920]">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Blog;