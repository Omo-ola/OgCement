"use client";
import { AboutSection, Footer, FooterText, PricingSection } from "./Styled";
import Hero from "./Hero";
import Brand from "./Brand";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

import image1 from "@/public/about1.png";
import FaqSection from "./Faq";

export default function HomePage() {
  const [cement, setCement] = useState([]);
  const services = [
    {
      title: "Cement Services",
      icon: "/screen_light_1.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Cement Transport services",
      icon: "/screen_light_2.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Construction Materials",
      icon: "/screen_light_3.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Duis at dictum risus",
      icon: "/screen_light_2.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  async function fetchData() {
    const response = await axios.get(
      "https://cement-api.onrender.com/api/cements"
    );
    console.log(response.data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Hero />
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">What We Specialize In</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src={service.icon}
                alt={service.title}
                width={8}
                height={8}
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Cement Company that provides the best quality
        </h2>
        <p className="text-lg mb-6">
          Reliable and Dedicated Cement Company for Your Construction.
        </p>
        <p className="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
          dictum risus, non suscipit arcu.
        </p>
        <button className="bg-yellow-500 text-black px-6 py-2 rounded-md">
          Read More
        </button>
      </section>
      {/* <Brand /> */}

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col justify-center md:flex-row items-center">
          <Image src={image1} alt="construction image" />

          <div className="w-full md:w-1/2 px-8 md:px-16">
            <h3 className="text-blue-500 font-semibold text-lg mb-2">
              Cement Company that provides the best quality
            </h3>
            <h2 className="text-3xl font-bold mb-6">
              Reliable and Dedicated Cement Company for Your Construction.
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis at
              dictum risus, non suscipit arcu. sit amet convallis nunc
              scelerisque in.
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
                <span className="ml-2">Isapsum dolor sit amet</span>
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
                <span className="ml-2">Adipiscing elit. Duis at.</span>
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
                <span className="ml-2">24/7 Support Services</span>
              </li>
            </ul>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </section>

      <PricingSection id="pricing">
        <h2>Pricing & Discounts</h2>
        <p>
          We offer competitive pricing based on the number of bags you order for
          our premium cement brands. Check out the pricing and discounts below.
        </p>

        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Quantity</th>
              <th>Price Per Bag</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody>
            {/* Dangote Cement */}
            <tr>
              <td rowSpan={3}>Dangote Cement</td>
              <td>1-49 Bags</td>
              <td>$50</td>
              <td>No Discount</td>
            </tr>
            <tr>
              <td className="highlight">50-99 Bags</td>
              <td>$48</td>
              <td>5% Discount</td>
            </tr>
            <tr>
              <td className="highlight">100+ Bags</td>
              <td>$45</td>
              <td>10% Discount</td>
            </tr>

            {/* Lafarge Cement */}
            <tr>
              <td rowSpan={3}>Lafarge Cement</td>
              <td>1-49 Bags</td>
              <td>$52</td>
              <td>No Discount</td>
            </tr>
            <tr>
              <td className="highlight">50-99 Bags</td>
              <td>$50</td>
              <td>4% Discount</td>
            </tr>
            <tr>
              <td className="highlight">100+ Bags</td>
              <td>$47</td>
              <td>8% Discount</td>
            </tr>

            {/* Other Cement Brand */}
            <tr>
              <td rowSpan={3}>Other Cement Brand</td>
              <td>1-49 Bags</td>
              <td>$49</td>
              <td>No Discount</td>
            </tr>
            <tr>
              <td className="highlight">50-99 Bags</td>
              <td>$46</td>
              <td>6% Discount</td>
            </tr>
            <tr>
              <td className="highlight">100+ Bags</td>
              <td>$44</td>
              <td>12% Discount</td>
            </tr>
          </tbody>
        </table>
      </PricingSection>

      <FaqSection />
    </>
  );
}
