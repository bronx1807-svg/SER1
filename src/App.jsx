import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Configurator from './components/Configurator'
import Gallery from './components/Gallery'
import ContentSection from './components/ContentSection'
import BookTypes from './components/BookTypes'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Configurator />
        <Gallery />
        <ContentSection />
        <BookTypes />
        <FAQ />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}

export default App
