import React from "react";
import bannerImg from "../../assets/boook.png";

const Banner = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16 rounded-xl my-10 lg:my-20">
      <div className=" flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center md:text-start lg:text-left mt-10 lg:mt-0 lg:max-w-xl">
          <h1 className="text-2xl md:text-3xl  lg:text-5xl font-bold text-gray-900 mb-6">
            Books to freshen up<br className="hidden md:block" /> your bookshelf
          </h1>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow transition duration-300">
            View The List
          </button>
        </div>

        {/* Book Image */}
        <div className="flex-shrink-0">
          <img
            src={bannerImg}
            alt="The Dating Playbook for Men"
            className="w-64 md:w-80 lg:w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
