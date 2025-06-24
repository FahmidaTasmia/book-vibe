// AddToDb.js

import { toast } from "react-toastify";

// Get the stored Read List from localStorage
const getStoredReadList = () => {
  const storedListStr = localStorage.getItem('read-list');
  return storedListStr ? JSON.parse(storedListStr) : [];
};

// Add a book to the stored Read List
const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    toast.info(`${id} is already in the read list.`);
  } else {
    storedList.push(id);
    localStorage.setItem('read-list', JSON.stringify(storedList));
    toast.success('This book has been added to your read list.');
  }
};

// Get the stored Wish List from localStorage
const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem('wish-list');
  return storedWishListStr ? JSON.parse(storedWishListStr) : [];
};

// Add a book to the stored Wish List
const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(id)) {
    toast.info(`${id} is already in the wish list.`);
  } else {
    storedWishList.push(id);
    localStorage.setItem('wish-list', JSON.stringify(storedWishList));
    toast.success('This book has been added to your wish list.');
  }
};

export { addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList };
