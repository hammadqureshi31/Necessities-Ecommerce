import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Allproducts from './pages/Allproducts.jsx'
import FAQs from './pages/FAQs.jsx'
import Contactpage from './pages/Contactpage.jsx'
import Details from './pages/Details.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />}/>
        <Route path='allproducts' element={<Allproducts />}/>
        <Route path='faqs' element={<FAQs />} />
        <Route path='contact' element={<Contactpage />}/>
        <Route path='product/details/:id' element={<Details />}/>
      </Route>
    </Routes>
    </HashRouter>
  </React.StrictMode>,
)
