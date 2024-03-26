import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Allproducts from './pages/Allproducts.jsx'
import FAQs from './pages/FAQs.jsx'
import Contactpage from './pages/Contactpage.jsx'
import Details from './pages/Details.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import { FirebaseProvider } from './contextAPI/Firebase.jsx'
import Cart from './pages/Cart.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseProvider>
        <HashRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<Home />} />
              <Route path='allproducts' element={<Allproducts />} />
              <Route path='faqs' element={<FAQs />} />
              <Route path='contact' element={<Contactpage />} />
              <Route path='product/details/:id' element={<Details />} />
              <Route path='signup' element={<Signup />} />
              <Route path='login' element={<Login />} />
              <Route path='cart' element={<Cart />} />
            </Route>
          </Routes>
        </HashRouter>
      </FirebaseProvider>
    </Provider>
  </React.StrictMode>,
)
