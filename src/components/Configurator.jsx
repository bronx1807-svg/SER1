import React, { useState, useMemo } from 'react'

const bookTypes = ['Класична фотокнига', 'Поліграфічна фотокнига', 'Фотокнига паспарту']
const sizes = {
  'Класична фотокнига': ['20x20', '25x25', '30x30', '20x30', '30x20', '30x40', '33x33'],
  'Поліграфічна фотокнига': ['20x20', '25x25', '20x30', '30x20'],
  'Фотокнига паспарту': ['25x25', '30x30', '30x40']
}
const papers = {
  'Класична фотокнига': ['Lustre (напівмат)', 'Silk (шовк)', 'Glossy (глянець)', 'Pearl (перламутр)'],
  'Поліграфічна фотокнига': ['Матовий', 'Глянцевий'],
  'Фотокнига паспарту': ['Lustre (напівмат)', 'Silk (шовк)']
}
const coverMaterials = ['Велюр', 'Замша', 'Льон', 'Еко-шкіра', 'Натуральна шкіра', 'Дерево']
const coverColors = [
  { name: 'Чорний', hex: '#1a1a1a' },
  { name: 'Темно-сірий', hex: '#4a4a4a' },
  { name: 'Бежевий', hex: '#d4c5a9' },
  { name: 'Слонова кістка', hex: '#f0ead6' },
  { name: 'Білий', hex: '#f5f5f5' },
  { name: 'Темно-синій', hex: '#2c3e6b' },
  { name: 'Бордовий', hex: '#7b2d3b' },
  { name: 'Оливковий', hex: '#6b7c5e' },
  { name: 'Рожевий', hex: '#d4a0a0' },
  { name: 'Коричневий', hex: '#6d4c3d' },
]
const forzatsOptions = ['Без форзаців', 'Форзаци з дизайнерського картону', 'Форзац, калька, перший розворот', 'Форзац з паспарту', 'Форзац, калька, паспарту']
const accents = ['Без акценту', 'Тиснення', 'Шильд', 'Фотовставка', 'Друк на обкладинці']

// Price calculation
const basePrices = {
  'Класична фотокнига': { '20x20': 1200, '25x25': 1500, '30x30': 1900, '20x30': 1700, '30x20': 1700, '30x40': 2400, '33x33': 2200 },
  'Поліграфічна фотокнига': { '20x20': 600, '25x25': 800, '20x30': 750, '30x20': 750 },
  'Фотокнига паспарту': { '25x25': 2500, '30x30': 3200, '30x40': 3800 }
}
const pagePricePerSpread = {
  'Класична фотокнига': 45,
  'Поліграфічна фотокнига': 12,
  'Фотокнига паспарту': 80
}

export default function Configurator() {
  const [bookType, setBookType] = useState(bookTypes[0])
  const [size, setSize] = useState(sizes[bookTypes[0]][0])
  const [spreads, setSpreads] = useState(10)
  const [paper, setPaper] = useState(papers[bookTypes[0]][0])
  const [cover, setCover] = useState(coverMaterials[0])
  const [color, setColor] = useState(coverColors[0].hex)
  const [forzats, setForzats] = useState(forzatsOptions[0])
  const [accent, setAccent] = useState(accents[0])

  const handleBookTypeChange = (type) => {
    setBookType(type)
    setSize(sizes[type][0])
    setPaper(papers[type][0])
    if (type === 'Поліграфічна фотокнига') {
      setSpreads(Math.min(spreads, 60))
    }
  }

  const maxSpreads = bookType === 'Класична фотокнига' ? 30 : bookType === 'Поліграфічна фотокнига' ? 60 : 20

  const price = useMemo(() => {
    const base = basePrices[bookType]?.[size] || 1200
    const extraSpreads = Math.max(0, spreads - 10)
    const spreadCost = extraSpreads * (pagePricePerSpread[bookType] || 40)
    const accentCost = accent === 'Без акценту' ? 0 : accent === 'Тиснення' ? 150 : accent === 'Шильд' ? 200 : accent === 'Фотовставка' ? 180 : 250
    const forzatsCost = forzats === 'Без форзаців' ? 0 : 80
    const coverExtra = cover === 'Натуральна шкіра' ? 600 : cover === 'Дерево' ? 500 : 0
    return base + spreadCost + accentCost + forzatsCost + coverExtra
  }, [bookType, size, spreads, accent, forzats, cover])

  return (
    <section className="configurator" id="configurator">
      <div className="configurator-inner">
        <h2 className="section-title">Розрахуйте вартість вашої унікальної фотокниги</h2>

        <div className="config-form">
          {/* Book Type */}
          <div className="config-group">
            <label className="config-label">
              Оберіть тип фотокниги <span className="required">*</span>
              <span className="info-icon" title="Оберіть тип фотокниги">i</span>
            </label>
            <div className="option-buttons">
              {bookTypes.map(t => (
                <button key={t} className={`opt-btn ${bookType === t ? 'active' : ''}`} onClick={() => handleBookTypeChange(t)}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="config-group">
            <label className="config-label">
              Формат (розмір) <span className="required">*</span>
            </label>
            <div className="option-buttons">
              {sizes[bookType].map(s => (
                <button key={s} className={`opt-btn ${size === s ? 'active' : ''}`} onClick={() => setSize(s)}>
                  {s} см
                </button>
              ))}
            </div>
          </div>

          {/* Spreads */}
          <div className="config-group">
            <label className="config-label">
              Кількість розворотів <span className="required">*</span>
            </label>
            <div className="slider-group">
              <input
                type="range"
                min={5}
                max={maxSpreads}
                value={spreads}
                onChange={e => setSpreads(Number(e.target.value))}
              />
              <span className="slider-value">{spreads}</span>
            </div>
          </div>

          {/* Paper */}
          <div className="config-group">
            <label className="config-label">
              Тип паперу <span className="required">*</span>
            </label>
            <div className="option-buttons">
              {papers[bookType].map(p => (
                <button key={p} className={`opt-btn ${paper === p ? 'active' : ''}`} onClick={() => setPaper(p)}>
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Cover Material */}
          <div className="config-group">
            <label className="config-label">
              Матеріал обкладинки <span className="required">*</span>
            </label>
            <div className="option-buttons">
              {coverMaterials.map(m => (
                <button key={m} className={`opt-btn ${cover === m ? 'active' : ''}`} onClick={() => setCover(m)}>
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="config-group">
            <label className="config-label">Колір обкладинки</label>
            <div className="color-swatches">
              {coverColors.map(c => (
                <button
                  key={c.hex}
                  className={`color-swatch ${color === c.hex ? 'active' : ''}`}
                  style={{ background: c.hex }}
                  onClick={() => setColor(c.hex)}
                  title={c.name}
                  aria-label={c.name}
                />
              ))}
            </div>
          </div>

          {/* Forzats */}
          <div className="config-group">
            <label className="config-label">
              Форзаци
              <span className="info-icon" title="Форзаци — декоративний елемент, який видно при відкритті книги">i</span>
            </label>
            <select className="config-select" value={forzats} onChange={e => setForzats(e.target.value)}>
              {forzatsOptions.map(f => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>

          {/* Accent */}
          <div className="config-group">
            <label className="config-label">Акцент на обкладинці</label>
            <div className="option-buttons">
              {accents.map(a => (
                <button key={a} className={`opt-btn ${accent === a ? 'active' : ''}`} onClick={() => setAccent(a)}>
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="price-section">
            <p className="price-label">Підсумкова ціна:</p>
            <p className="price-value">{price.toFixed(1)}₴</p>
            <p className="price-note">Якщо калькуляція не відбувається, перевірте, чи всі обов'язкові опції обрані.</p>
            <button className="add-cart-btn">ДОДАТИ ДО КОШИКА</button>
          </div>
        </div>
      </div>
    </section>
  )
}
