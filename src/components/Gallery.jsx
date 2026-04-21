import React, { useState } from 'react'

const tabs = ['Класичні фотокниги', 'Фотокниги паспарту', 'Поліграфічні фотокниги']

const galleryImages = {
  'Класичні фотокниги': [
    'https://images.unsplash.com/photo-1544396821-4dd40b938cb1?w=300&q=75',
    'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&q=75',
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&q=75',
    'https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&q=75',
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&q=75',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=75',
    'https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=300&q=75',
    'https://images.unsplash.com/photo-1513001900722-370f803f498d?w=300&q=75',
    'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=300&q=75',
    'https://images.unsplash.com/photo-1553729459-afe8f2e2ed65?w=300&q=75',
    'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&q=75',
    'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&q=75',
  ],
  'Фотокниги паспарту': [
    'https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=300&q=75',
    'https://images.unsplash.com/photo-1513001900722-370f803f498d?w=300&q=75',
    'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=300&q=75',
    'https://images.unsplash.com/photo-1553729459-afe8f2e2ed65?w=300&q=75',
    'https://images.unsplash.com/photo-1544396821-4dd40b938cb1?w=300&q=75',
    'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&q=75',
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&q=75',
    'https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&q=75',
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&q=75',
  ],
  'Поліграфічні фотокниги': [
    'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&q=75',
    'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&q=75',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=75',
    'https://images.unsplash.com/photo-1544396821-4dd40b938cb1?w=300&q=75',
    'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&q=75',
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&q=75',
    'https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&q=75',
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&q=75',
    'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=300&q=75',
    'https://images.unsplash.com/photo-1553729459-afe8f2e2ed65?w=300&q=75',
  ]
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-inner">
        <div className="gallery-tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`gallery-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {galleryImages[activeTab].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${activeTab} ${i + 1}`}
              className="gallery-img"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
