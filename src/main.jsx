import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // ✅ This is required
import Root from './components/Root/Root';

import Home from './components/Pages/Home/Home';
import DashBoard from './components/Pages/DashBoard/DashBoard';
import ErrorPage from './components/Pages/ErrorPgae/ErrorPage';
import BookDetails from './components/Pages/BookDetails/BookDetails';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReadList from './components/Pages/ReadList/ReadList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'dashboard',
        element:<DashBoard></DashBoard>
      },
      {
        path:'books/:bookId',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('../public/booksData.json')

      },
      {
        path:'readList',
        element:<ReadList></ReadList>,
         loader:()=>fetch('../public/booksData.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
      <ToastContainer />
  </StrictMode>
);
