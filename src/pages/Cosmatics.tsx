const Cosmetics = () => {
  return (
    <div className="min-h-screen bg-[#f5eee6] text-[#3b2920]">

      {/* Hero */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#d8c0aa] px-6 py-12 sm:px-12 sm:py-20 text-center">

          <p className="mb-3 text-sm sm:text-base uppercase tracking-[0.25em] text-[#6b4b3a]">
            Beauty & Self Care
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
            Cosmetics
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-7 text-[#5a4032]">
            Discover simple beauty essentials designed to complement
            your everyday style and routine.
          </p>

          <button className="mt-8 rounded-full bg-[#3b2920] px-7 py-3 text-sm sm:text-base text-white transition hover:bg-[#51382b]">
            Explore Collection
          </button>

        </div>
      </section>


      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 sm:pb-16">

        <div className="text-center mb-8 sm:mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-[#8a6049]">
            Explore
          </p>

          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">
            Beauty Categories
          </h2>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Skincare */}
          <div className="group rounded-2xl bg-[#eadbcf] p-7 sm:p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d8c0aa] text-3xl">
              🧴
            </div>

            <h3 className="mt-5 text-xl font-semibold">
              Skincare
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#6b4b3a]">
              Cleansers, serums, moisturizers and everyday skincare
              essentials.
            </p>

            <button className="mt-5 text-sm font-medium underline underline-offset-4">
              Explore
            </button>

          </div>


          {/* Makeup */}
          <div className="group rounded-2xl bg-[#eadbcf] p-7 sm:p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d8c0aa] text-3xl">
              💄
            </div>

            <h3 className="mt-5 text-xl font-semibold">
              Makeup
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#6b4b3a]">
              Everyday makeup essentials to complete your look.
            </p>

            <button className="mt-5 text-sm font-medium underline underline-offset-4">
              Explore
            </button>

          </div>


          {/* Hair Care */}
          <div className="group rounded-2xl bg-[#eadbcf] p-7 sm:p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d8c0aa] text-3xl">
              🪮
            </div>

            <h3 className="mt-5 text-xl font-semibold">
              Hair Care
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#6b4b3a]">
              Hair care essentials for a simple and effective routine.
            </p>

            <button className="mt-5 text-sm font-medium underline underline-offset-4">
              Explore
            </button>

          </div>

        </div>
      </section>


      {/* Beauty Essentials */}
      <section className="bg-[#3b2920] px-4 sm:px-6 py-12 sm:py-16 text-white">

        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[#d8c0aa]">
              Everyday Essentials
            </p>

            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">
              Simple beauty, everyday confidence.
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-7 text-[#dbcfc7]">
              Build a simple routine with products that fit naturally
              into your everyday lifestyle.
            </p>
          </div>


          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">
                Daily Care
              </h3>

              <p className="mt-2 text-sm text-[#dbcfc7]">
                Essentials for your everyday routine.
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">
                Self Care
              </h3>

              <p className="mt-2 text-sm text-[#dbcfc7]">
                Take a little time for yourself.
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">
                Beauty Tips
              </h3>

              <p className="mt-2 text-sm text-[#dbcfc7]">
                Discover simple ways to improve your routine.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">

        <div className="mx-auto max-w-4xl rounded-3xl bg-[#d8c0aa] p-8 sm:p-12 text-center">

          <h2 className="text-2xl sm:text-3xl font-semibold">
            Find Your Beauty Essentials
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-[#5a4032]">
            Explore our collection and find products that fit your
            personal routine.
          </p>

          <button className="mt-6 rounded-full bg-[#3b2920] px-7 py-3 text-white transition hover:bg-[#51382b]">
            Shop Cosmetics
          </button>

        </div>

      </section>

    </div>
  );
};

export default Cosmetics;