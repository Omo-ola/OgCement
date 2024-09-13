"use client";
import { useState } from "react";

import image2 from "@/public/Cement2.jpg";
import Image from "next/image";

export default function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(0);
    } else {
      setOpenFaqIndex(index);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src={image2}
            alt="Engineer at work"
            className="w-3/4 mx-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 px-4">
          <h3 className="text-blue-500 font-semibold text-lg mb-2">
            Frequently asked
          </h3>
          <h2 className="text-3xl font-bold mb-6">Frequently Questions</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisi hendrerit commodo.
          </p>

          <div className="space-y-4">

            <div
              className="p-4 rounded-md cursor-pointer"
              onClick={() => toggleFaq(0)}
            >
              <h4 className="font-semibold text-lg mb-2 bg-yellow-500 px-2 rounded-md">
                - We are always careful to our clients and service
              </h4>
              {openFaqIndex === 0 && (
                <p className="transition-all duration-200 px-4">
                  We always take care of our clients and provide top-notch
                  service to ensure complete satisfaction.
                </p>
              )}
            </div>

            <div
              className="  p-4 rounded-md  cursor-pointer"
              onClick={() => toggleFaq(1)}
            >
              <h4 className="font-semibold text-lg mb-2 bg-yellow-500 px-2 rounded-md">
                - How to get the best use of these services?
              </h4>
              {openFaqIndex === 1 && (
                <p className="transition-all duration-200 px-4">
                  To get the best out of our services, please contact our
                  support team for personalized guidance.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
