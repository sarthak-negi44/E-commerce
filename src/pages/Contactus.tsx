import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contactus = () => {
  return (
    <main className="min-h-screen bg-[#f5eee6] px-4 py-12">

      {/* Header */}
      <section className="mx-auto max-w-6xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[#8a6049]">
          Get In Touch
        </p>

        <h1 className="mt-2 text-4xl font-semibold text-[#3b2920] sm:text-5xl">
          Contact Us
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Have a question about our products or your order?
          We'd love to hear from you.
        </p>
      </section>

      {/* Main Content */}
      <section className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">

        {/* Contact Information */}
        <div className="rounded-2xl bg-[#3b2920] p-8 text-white sm:p-10">
          <h2 className="text-2xl font-semibold">
            Let's Talk
          </h2>

          <p className="mt-3 leading-7 text-gray-300">
            Whether you have a question about a product, an order, or
            anything else, our team is here to help.
          </p>

          <div className="mt-8 space-y-6">

            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0" />

              <div>
                <p className="font-medium">Email</p>
                <p className="mt-1 text-gray-300">
                  support@yourstore.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0" />

              <div>
                <p className="font-medium">Phone</p>
                <p className="mt-1 text-gray-300">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0" />

              <div>
                <p className="font-medium">Location</p>
                <p className="mt-1 text-gray-300">
                  Himachal Pradesh, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0" />

              <div>
                <p className="font-medium">Working Hours</p>
                <p className="mt-1 text-gray-300">
                  Monday - Saturday
                </p>
                <p className="text-gray-300">
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold text-[#3b2920]">
            Send Us a Message
          </h2>

          <form className="mt-6 space-y-5">

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-[#8a6049]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-[#8a6049]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Subject
              </label>

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-[#8a6049]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-[#8a6049]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#3b2920] px-6 py-3 font-medium text-white transition hover:bg-[#51382b]"
            >
              Send Message
            </button>

          </form>
        </div>

      </section>
    </main>
  );
};

export default Contactus;