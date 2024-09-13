import Hero from "./Hero";
import Image from "next/image";
import { TbWorldSearch } from "react-icons/tb";

import image1 from "@/public/about1.png";
import FaqSection from "./Faq";
import { BsPencilSquare } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";

import dangote from "@/public/screen_light_1.png";
import lafarge from "@/public/screen_light_2.png";
import other from "@/public/screen_light_3.png";
import Link from "next/link";

export default function HomePage() {
  const services = [
    {
      title: "Browser",
      icon: <TbWorldSearch />,
      description: "Search for your desired product",
    },
    {
      title: "Select",
      icon: <BsPencilSquare />,
      description: "Select your desired product",
    },
    {
      title: "Pay and Confirm",
      icon: <MdPayment />,
      description: "Make your payment and confirm your payment",
    },
    {
      title: "Deliver",
      icon: <GrDeliver />,
      description: "Expect your order to be delivered in small time",
    },
  ];

  return (
    <>
      <Hero />
      <section className="py-16 bg-[var(--bg-grey)] px-6 text-center md:max-w-[70%] mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[var( --txt-heading)]">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-4xl flex justify-center mb-4 text-center">
                {service.icon}
              </p>
              <h3 className="text-xl font-bold mb-2 text-[var( --txt-heading)]">
                {service.title}
              </h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <Brand /> */}

      <section className="py-16 ">
        <h2 className="text-3xl font-bold mb-6 text-[var( --txt-heading)] text-center">
          Why chose us ?
        </h2>
        <div className="container mx-auto flex flex-col justify-center md:flex-row items-center">
          <Image src={image1} alt="construction image" />

          <div className="w-full md:w-1/2 px-8 md:px-16">
            <h3 className="text-blue-500 font-semibold text-lg mb-2">
              Cement Company that provides the best quality
            </h3>
            <h2 className="text-3xl font-bold mb-6 text-[var( --txt-heading)]">
              Reliable and Dedicated Cement Company for Your Construction.
            </h2>
            <p className="text-gray-600 mb-6">
              Enjoy unbeatable prices, swift delivery, and a wide range of
              products tailored to your construction needs
            </p>
            <ul className="mb-6 space-y-4">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="ml-2">Top quality cement</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="ml-2">Competitive prices</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="ml-2">Fast & reliable delivery</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="ml-2">Secure payment</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="ml-2">Excellent Customer Support</span>
              </li>
            </ul>
            <Link
              href="/"
              className="bg-[var(--bg-accent)] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--bg-grey)] px-6 md:max-w-[70%] mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[var( --txt-heading)] text-center">
          Featured Product
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg relative shadow-md h-[20rem]">
            <Image src={dangote} fill alt="image of product" />
          </div>
          <div className="bg-white p-6 rounded-lg relative shadow-md h-[20rem]">
            <Image src={lafarge} fill alt="image of product" />
          </div>
          <div className="bg-white p-6 rounded-lg relative shadow-md h-[20rem]">
            <Image src={other} fill alt="image of product" />
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
