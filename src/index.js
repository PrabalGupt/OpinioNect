import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App.js'
import SignUp from './pages/SignUp.js'
import Index from './pages/Index.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"SignUp",
    element: <SignUp/>
  },
  {
    path:"Index",
    element: <Index/>
  }
]);
ReactDOM.render(<RouterProvider router={router}/>, document.getElementById('root'))