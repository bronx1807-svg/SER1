import React from 'react'
import PrintHero from '../components/print/PrintHero'
import PrintConfigurator from '../components/print/PrintConfigurator'
import PrintContent from '../components/print/PrintContent'
import PrintPaperTypes from '../components/print/PrintPaperTypes'
import PrintFAQ from '../components/print/PrintFAQ'

export default function PrintPage() {
  return (
    <>
      <PrintHero />
      <PrintConfigurator />
      <PrintContent />
      <PrintPaperTypes />
      <PrintFAQ />
    </>
  )
}
