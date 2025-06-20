import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((item) => item.bookId === id);

  const {
    bookName,
    image,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = () =>{
    
  }

  return (
    <div className="container mx-auto p-6 md:p-12 bg-base-200 rounded-xl shadow flex flex-col md:flex-row gap-12 md:gap-16 items-center lg:my-8">
      {/* Left: Book Image */}
      <div className="flex justify-center md:w-1/3">
        <img
          src={image}
          alt={bookName}
          className="w-64 h-auto md:w-80 rounded-lg shadow-xl"
        />
      </div>

      {/* Right: Book Details */}
      <div className="md:w-2/3 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {bookName}
        </h1>
        <p className="text-lg lg:text-2xl text-gray-800 font-medium  mb-4  border-b-2 border-gray-200 pb-3 lg:pb-5">
          By: {author}
        </p>
        <p className="lg:text-2xl text-gray-800 font-medium mb-4  border-b-2 border-gray-200 pb-3 lg:pb-5">
          {category}
        </p>

        {/* Review Section */}
        <p className="text-md text-gray-700 mb-6 text-justify mt-6">
          {" "}
          <span className="font-bold">Review : </span>
          {review}
        </p>

        {/* Tags */}
        <div className="flex  gap-4 flex-wrap mt-6 lg:py-8 border-b-2 border-gray-200  ">
          <p className="font-bold">Tag</p>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="btn btn-sm bg-gray-100 rounded-full px-4 lg:px-6 border-0 text-green-600 text-[16px]"
            >{`#${tag}`}</span>
          ))}
        </div>

        {/* Book Details: Pages, Publisher, Year */}
        <div className="text-sm text-gray-600 mb-4 lg:mt-8 mt-5 ">
          <p className="flex gap-6 text-[16px]">
            Number of Pages:{" "}
            <span className="font-bold text-black">{totalPages}</span>
          </p>
          <p className="flex my-4 gap-6 text-[16px]">
            Publisher: <span className="font-bold text-black">{publisher}</span>
          </p>
          <p className="flex gap-6 text-[16px]">
            Year of Publishing:{" "}
            <span className="font-bold text-black">{yearOfPublishing}</span>
          </p>
          <p className="flex gap-6 text-[16px] my-4">
            Rating: <span className="font-bold text-black">{rating}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex  gap-4 mt-6 lg:mt-8">
          <button onClick={handleMarkAsRead} className=" btn p-6 border-[1px] rounded-lg border-gray-500 bg-white hover:bg-[#50b1c9] hover:text-white font-bold text-lg text-gray-800  ">
            Read
          </button>
          <button className=" btn p-6 border-[1px] rounded-lg border-gray-500 bg-white hover:bg-[#50b1c9] hover:text-white font-bold text-lg text-gray-800 ">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
