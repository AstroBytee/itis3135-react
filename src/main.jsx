import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './default.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home.jsx'
import Introduction from './Introduction.jsx'
import Contract from './Contract.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Introductions from './Introductions.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="contract" element={<Contract />} />
        <Route path="introductions" element={<Introductions/>} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </StrictMode>,
)
