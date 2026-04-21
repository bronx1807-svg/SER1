import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Configurator from '../components/Configurator'
import Gallery from '../components/Gallery'
import ContentSection from '../components/ContentSection'
import BookTypes from '../components/BookTypes'
import FAQ from '../components/FAQ'

export default function PhotobookPage() {
  return (
    <>
      <Hero />
      <Features />
      <Configurator />
      <Gallery />
      <ContentSection />
      <BookTypes />
      <FAQ />
    </>
  )
}
