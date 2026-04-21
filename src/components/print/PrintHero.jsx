import React from 'react'

export default function PrintHero() {
  return (
    <section className="hero">
      <div className="hero-bg" style={{
        background: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1400&q=80') center/cover",
        opacity: 0.2
      }}></div>
      <div className="hero-content">
        <h1>Фотодрук преміум-якості</h1>
        <p>
          Друк фотографій хімічним способом на фотолабораторії Noritsu<br/>
          з використанням найякіснішого фотопаперу FUJI
        </p>
        <a href="#print-configurator" className="hero-btn">Замовити фотодрук</a>
      </div>
    </section>
  )
}
