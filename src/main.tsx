import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root/Root';
import MainPage from './routes/MainPage/MainPage'; // Corrected import for MainPage component

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <Root />,
    children: [
      {
        path: '/',
        element: <MainPage />, // Corrected path for MainPage component
      },
      {
        path: 'about',
        element: <div>About</div>,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
