import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard, Learn, Lesson, Practice, Profile, Shop } from './pages/index';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter([
   {
      path: "/",
      element: <RootLayout />,
      children: [
         {
            path: "/",
            element: <Dashboard />
         },
         {
            path: "/learn",
            element: <Learn />
         },
         {
            path: "/practice",
            element: <Practice />
         },
         {
            path: "/profile",
            element: <Profile />
         },
         {
            path: "/shop",
            element: <Shop />
         },
         {
            // lesson path will contain an id
            path: "/lesson/:lessonId",
            element: <Lesson />
         }
      ],
   },
]);

function App() {
   return (
      <RouterProvider router={router}></RouterProvider>
   );
}

export default App;