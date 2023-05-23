import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Catalog } from './components/Catalog';
import { Home } from './pages/Home/index';
import { User } from './pages/User/index';
import { SignIn } from './pages/SignIn/index';
import { SignUp } from './pages/SignUp/index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'products',
        element: <Catalog />
      },
      {
        path: 'user/me',
        element: <User />
      },
      // Страницы авторизации SignIn и SignUp
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/signup',
        element: <SignUp />
      }
      // Детальная страница с товарами
      //{
      //  path: 'products/:idOfProduct',
      //  element: <CurrentProduct />
      //}
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/*<App /> */}
  </React.StrictMode>
);
