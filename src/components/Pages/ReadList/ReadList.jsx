import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";

// Correctly import all the necessary functions
import {getStoredReadList, getStoredWishList } from "../../../utility/AddToDb"; 
import SingleBook from "../SingleBook/SingleBook";
import WishList from "../WishList/WishList";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [addWishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData(); // Assuming 'data' is the list of books

  // Fetch the read list and filter the books from the data based on the stored list
  useEffect(() => {
    if (!data || !Array.isArray(data)) return;

    const storedBookData = getStoredReadList();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  // Fetch the wish list and filter the books from the data based on the stored list
  useEffect(() => {
    if (!data || !Array.isArray(data)) return;

    const wishList = getStoredWishList(); // Correct function call
    const convertedStoredWishList = wishList.map((id) => parseInt(id));
    const myWishList = data.filter((book) =>
      convertedStoredWishList.includes(book.bookId)
    );
    setWishList(myWishList);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);
    let sortedList = [];
    if (type === "pages") {
      sortedList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
    }
    if (type === "ratings") {
      sortedList = [...readList].sort((a, b) => a.rating - b.rating);
    }
    setReadList(sortedList);
  };

  // Safely render Read List
  const renderReadList = Array.isArray(readList) && readList.length > 0 ? (
    readList.map((book) => (
      <SingleBook key={book.bookId} book={book} />
    ))
  ) : (
    <p>No books found in your read list.</p>
  );

  // Safely render Wish List
  const renderWishList = Array.isArray(addWishList) && addWishList.length > 0 ? (
    addWishList.map((book) => (
      <WishList key={book.bookId} book={book} />
    ))
  ) : (
    <p>No books found in your wish list.</p>
  );

  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">Sort by: {sort || "Select an option"}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("ratings")}>Ratings</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <div className="grid gap-8 mt-6">{renderReadList}</div>
        </TabPanel>
        <TabPanel>
          <div>{renderWishList}</div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
