import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../../utility/AddToDb";

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

  const handleMarkAsRead = (id) =>{
      addToStoredReadList (id);
  }

  const handleMarkAsWishList = (id) =>{
       addToStoredWishList(id);
  }

  return (
   <div className="container mx-auto p-4 sm:p-6 lg:p-8 xl:p-12 bg-base-200 rounded-xl shadow flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center my-4 sm:my-6 lg:my-8">
  {/* Left: Book Image */}
  <div className="flex justify-center w-full md:w-1/3 max-w-xs sm:max-w-sm md:max-w-none">
    <img
      src={image}
      alt={bookName}
      className="w-full h-auto max-w-[16rem] sm:max-w-[20rem] md:w-64 lg:w-80 rounded-lg shadow-xl"
    />
  </div>

  {/* Right: Book Details */}
  <div className="w-full md:w-2/3  md:text-left">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
      {bookName}
    </h1>
    
    <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-800 font-medium mb-3 sm:mb-4 border-b-2 border-gray-200 pb-2 sm:pb-3 lg:pb-4">
      By: {author}
    </p>
    
    <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-800 font-medium mb-3 sm:mb-4 border-b-2 border-gray-200 pb-2 sm:pb-3 lg:pb-4">
      {category}
    </p>

    {/* Review Section */}
    <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 text-justify mt-4 sm:mt-6">
      <span className="font-bold">Review: </span>
      {review}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 items-center mt-4 sm:mt-6 lg:py-4 xl:py-6 border-b-2 border-gray-200 pb-4 sm:pb-6">
      <p className="font-bold text-sm sm:text-base">Tag</p>
      {tags.map((tag, index) => (
        <span
          key={index}
          className="btn btn-xs sm:btn-sm bg-gray-100 rounded-full px-3 sm:px-4 lg:px-5 border-0 text-green-600 text-xs sm:text-sm md:text-base"
        >{`#${tag}`}</span>
      ))}
    </div>

    {/* Book Details: Pages, Publisher, Year */}
    <div className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 lg:mt-6 mt-3 sm:mt-4">
      <p className="flex flex-wrap gap-1 sm:gap-2 md:gap-3 lg:gap-6">
        Number of Pages: 
        <span className="font-bold text-black">{totalPages}</span>
      </p>
      <p className="flex flex-wrap gap-1 sm:gap-2 md:gap-3 lg:gap-6 my-2 sm:my-3 md:my-4">
        Publisher: 
        <span className="font-bold text-black">{publisher}</span>
      </p>
      <p className="flex flex-wrap gap-1 sm:gap-2 md:gap-3 lg:gap-6">
        Year of Publishing: 
        <span className="font-bold text-black">{yearOfPublishing}</span>
      </p>
      <p className="flex flex-wrap gap-1 sm:gap-2 md:gap-3 lg:gap-6 my-2 sm:my-3 md:my-4">
        Rating: 
        <span className="font-bold text-black">{rating}</span>
      </p>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 lg:mt-8">
      <button 
        onClick={()=>handleMarkAsRead(bookId)} 
        className="btn btn-sm sm:btn-md lg:btn-lg px-4 sm:px-6 py-2 sm:py-3 border-[1px] rounded-lg border-gray-500 bg-white hover:bg-[#50b1c9] hover:text-white font-bold text-sm sm:text-base md:text-lg text-gray-800"
      >
        Read
      </button>
      <button 
      onClick={()=>handleMarkAsWishList(bookId)}
        className="btn btn-sm sm:btn-md lg:btn-lg px-4 sm:px-6 py-2 sm:py-3 border-[1px] rounded-lg border-gray-500 bg-white hover:bg-[#50b1c9] hover:text-white font-bold text-sm sm:text-base md:text-lg text-gray-800"
      >
        Wishlist
      </button>
    </div>
  </div>
</div>
  );
};

export default BookDetails;
