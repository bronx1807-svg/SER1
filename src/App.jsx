import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import PhotobookPage from './pages/PhotobookPage'
import PrintPage from './pages/PrintPage'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<PhotobookPage />} />
          <Route path="/photobook" element={<PhotobookPage />} />
          <Route path="/print" element={<PrintPage />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}

export default App
