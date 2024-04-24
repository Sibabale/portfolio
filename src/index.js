import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import './index.css';

import { Home } from './views/home';
import { Design } from './views/design';
import { Develop } from './views/development';
import { WhyDesign } from './views/design/why';
import { WhyDevelop } from './views/development/why';
import { DesignStyle } from './views/design/style';
import { DesignTools } from './views/design/tools';
import { DesignProcess } from './views/design/process';
import { DevelopmentTools } from './views/development/tools';
import { DevelopmentStyle } from './views/development/style';
import { DevelopmentProcess } from './views/development/process';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/design",
    element: <Design />,
  },
  {
    path: "/development",
    element: <Develop />,
  },
  {
    path: "/design/why",
    element: <WhyDesign />,
  },
  {
    path: "/design/style",
    element: <DesignStyle />,
  },
  {
    path: "/design/process",
    element: <DesignProcess />,
  },
  {
    path: "/design/tools",
    element: <DesignTools />,
  },
  {
    path: "/development/why",
    element: <WhyDevelop />,
  },
  {
    path: "/development/style",
    element: <DevelopmentStyle />,
  },
  {
    path: "/development/process",
    element: <DevelopmentProcess />,
  },
  {
    path: "/development/tools",
    element: <DevelopmentTools />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
