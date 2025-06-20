import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, bookName, tags, author, category, image, rating } = book;

  return (
    <Link to={`/books/${bookId}`}>
    <div className="bg-white rounded-xl shadow border border-gray-300 p-4">
      <img
        src={image}
        alt={bookName}
        className="w-full h-64 object-contain p-5 mb-4 bg-gray-100 rounded-xl  "
      />

      <div className="flex flex-wrap gap-2 mb-2">
        {tags?.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-sm rounded-full bg-green-100 text-green-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="border-b border-dashed border-gray-300 ">
        <h3 className="text-lg font-semibold mb-1">{bookName}</h3>
        <p className="text-gray-600 text-sm mb-4">By : {author}</p>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-500 mt-3">
        <span>{category}</span>
        <span className="flex items-center gap-1">
          {rating.toFixed(2)}
          <FaStar className="text-yellow-400" />
        </span>
      </div>
    </div>
    </Link>
  );
};

export default Book;
