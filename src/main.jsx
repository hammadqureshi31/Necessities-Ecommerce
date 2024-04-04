import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import Allproducts from './pages/Allproducts.jsx';
import FAQs from './pages/FAQs.jsx';
import Contactpage from './pages/Contactpage.jsx';
import Details from './pages/Details.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import { FirebaseProvider } from './contextAPI/Firebase.jsx';
import Cart from './pages/Cart.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'allproducts', element: <Allproducts /> },
      { path: 'faqs', element: <FAQs /> },
      { path: 'contact', element: <Contactpage /> },
      { path: 'product/details/:id', element: <Details /> },
      { path: 'signup', element: <Signup /> },
      { path: 'login', element: <Login /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseProvider>
        <RouterProvider router={router}>
          <Routes />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </RouterProvider>
      </FirebaseProvider>
    </Provider>
  </React.StrictMode>
);
