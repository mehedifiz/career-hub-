import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Comp/Root/Root';
import Home from './Comp/Home/Home';
import Applied from './Comp/Applied/Applied';
import Error from './Comp/Error/Error';
import JobD from './Comp/JobD/JobD';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>

      },{
          path:'/applied',
          element:<Applied></Applied>,
          loader:()=> fetch("/jobs.json")
      },{
        path:'/job/:id',
        element:<JobD></JobD>,
        loader: () =>fetch('../jobs.json')
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
