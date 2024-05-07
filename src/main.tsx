import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root/Root.tsx';
import MainPage from './routes/MainPage/MainPage.tsx'; // Imported MainPage component

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <Root />,
    children: [
      {
        path: '/',
        element: <MainPage />, // Used MainPage component for the '/' path
      },
      {
        path: 'about',
        element: <div>About</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
