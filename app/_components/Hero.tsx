"use client";
import Image from "next/image";
import Link from "next/link";
function Hero() {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center relative"
      // style={{ backgroundImage: "url('/header-bg2.jpg')" }}
    >
      <Image
        className="object-cover object-top -z-50"
        // placeholder="blur"
        src={"/header-bg2.jpg"}
        alt="banner image"
        fill
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto z-10 relative">
        <div className="text-center text-white">
          <h2 className="text-[var(--bg-yellow)] font-semibold text-lg mb-2">
            Builders Know Our Product Well
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Buy Cement Online
            <span className="text-[var(--bg-yellow)]">
              {" "}
              Fast, Easy, Reliable
            </span>
            .
          </h1>
          <p className="text-lg mb-8 text-[var(--bg-grey)]">
            Discover the convenience of purchasing high-quality cement from the
            comfort of your home. Enjoy unbeatable prices, swift delivery, and a
            wide range of products tailored to your construction needs.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/order"
              className="bg-[var(--bg-accent)] hover:bg-blue-700 text-[var(--bg-grey)] font-bold py-3 px-6 rounded-md transition duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
