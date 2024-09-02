import Image from "next/image";
import img from "@/public/vercel.svg";

function Detail() {
  return (
    <section className="py-12">
      <h3 className="text-center text-xl font-semibold mb-2">
        OG Cement LTD
      </h3>
      <p className="text-4xl font-semibold text-center mb-12">How we do it?</p>
      <div className="flex justify-between items-center flex-wrap text-center gap-8">
        <div className="flex flex-col items-center justify-center gap-4 bg-white px-4 py-6 rounded-md shadow-xl w-[20rem] h-[20rem]">
          <div className="relative w-[4rem] h-[4rem] rounded-full">
            <Image
              src={img}
              fill
              alt="select icon"
              className="overflow-hidden"
            />
          </div>
          <h3 className="text-xl font-semibold">Select your desired brand</h3>
          <p>
            Check our website and select the brand you will like to purchase.
            Dangote Cement, Larfarge Cement etc.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 bg-white px-4 py-6 rounded-md shadow-xl w-[20rem] h-[20rem] md:-translate-y-6">
          <div className="relative w-[4rem] h-[4rem] rounded-full">
            <Image
              src={img}
              fill
              alt="select icon"
              className="overflow-hidden"
            />
          </div>
          <h3 className="text-xl font-semibold">Select your desired brand</h3>
          <p>
            Check our website and select the brand you will like to purchase.
            Dangote Cement, Larfarge Cement etc.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 bg-white px-4 py-6 rounded-md shadow-xl w-[20rem] h-[20rem]">
          <div className="relative w-[4rem] h-[4rem] rounded-full">
            <Image
              src={img}
              fill
              alt="select icon"
              className="overflow-hidden"
            />
          </div>
          <h3 className="text-xl font-semibold">Select your desired brand</h3>
          <p>
            Check our website and select the brand you will like to purchase.
            Dangote Cement, Larfarge Cement etc.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Detail;
