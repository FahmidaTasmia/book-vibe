import { FiUsers } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineRestorePage } from "react-icons/md";

const WishList = ({ book }) => {
  const {
    bookName,
    tags,
    author,
    category,
    image,
    rating,
    yearOfPublishing,
    publisher,
    totalPages,
  } = book;

  return (
    <div className="border bg-white p-6 sm:p-8 lg:p-10 rounded-2xl flex flex-col md:flex-row items-center border-gray-300  ">
      {/* Left Side: Book Image */}
      <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-8 border-b lg:border-none border-gray-300 pr-6 ">
        <img
          src={image}
          alt={bookName}
          className="w-44 h-64 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 "
        />
      </div>

      {/* Right Side: Book Details */}
      <div className="flex-1 w-full">
        {/* Book Title */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2 tracking-tight">
            {bookName}
          </h2>
          <p className="text-sm sm:text-base my-2 lg:my-4 text-gray-600">
            By: <span className="font-semibold text-gray-700">{author}</span>
          </p>
        </div>

        {/* Tags and Year of Publishing */}
        <div className="flex flex-wrap gap-4 mt-4">
          <div className="w-full sm:w-auto">
            <h4 className="font-semibold text-gray-700 mb-2">Tags</h4>
            <div className="flex flex-wrap gap-3 mt-2">
              {tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 text-sm rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition-all duration-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <p className="flex gap-2 items-center text-sm sm:text-base text-gray-600 mt-2 sm:mt-0">
            <IoLocationOutline className="text-gray-600" /> Year of Publishing:{" "}
            {yearOfPublishing}
          </p>
        </div>

        {/* Publisher and Total Pages */}
        <div className="flex flex-wrap gap-4 mt-6 border-b border-gray-300 pb-4">
          <p className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
            <FiUsers className="text-gray-600" /> Publisher: {publisher}
          </p>
          <p className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
            <MdOutlineRestorePage className="text-xl text-gray-600" /> Pages:{" "}
            {totalPages}
          </p>
        </div>

        {/* Category, Rating, and Buttons */}
        <div className="flex flex-wrap gap-4 mt-5">
          <button className="rounded-full bg-[#e0eeff] px-6 py-2 text-blue-500 text-sm sm:text-base hover:bg-[#c3d9f8] transition-all duration-300">
            Category: {category}
          </button>
          <button className="rounded-full bg-orange-100 px-6 py-2 text-orange-400 text-sm sm:text-base hover:bg-orange-200 transition-all duration-300">
            Rating: {rating}
          </button>
          <button className="rounded-full bg-[#23be0a] px-6 py-2 text-white text-sm sm:text-base hover:bg-[#1e9c07] transition-all duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishList;
