import React, { useState, useMemo } from 'react'

const sizes = [
  { label: '10×10 см', value: '10x10', price: 8 },
  { label: '10×15 см', value: '10x15', price: 8 },
  { label: '13×18 см', value: '13x18', price: 12 },
  { label: '15×20 см', value: '15x20', price: 18 },
  { label: '15×21 см', value: '15x21', price: 18 },
  { label: '20×30 см', value: '20x30', price: 35 },
  { label: '30×40 см', value: '30x40', price: 75 },
  { label: 'Індивідуальний', value: 'custom', price: 50 },
]

const papers = [
  'Lustre (напівмат)',
  'Silk (шовк)',
  'Glossy (глянець)',
  'Pearl (перламутр)',
]

const borderOptions = [
  { label: 'Без полів (на виліт)', value: 'none', extra: 0 },
  { label: 'Поля 5 мм', value: '5mm', extra: 2 },
  { label: 'Поля 10 мм', value: '10mm', extra: 3 },
]

export default function PrintConfigurator() {
  const [size, setSize] = useState(sizes[1].value)
  const [paper, setPaper] = useState(papers[0])
  const [border, setBorder] = useState(borderOptions[0].value)
  const [qty, setQty] = useState(10)

  const price = useMemo(() => {
    const sizeItem = sizes.find(s => s.value === size) || sizes[1]
    const borderItem = borderOptions.find(b => b.value === border) || borderOptions[0]
    const unitPrice = sizeItem.price + borderItem.extra
    return unitPrice * qty
  }, [size, border, qty])

  const unitPrice = useMemo(() => {
    const sizeItem = sizes.find(s => s.value === size) || sizes[1]
    const borderItem = borderOptions.find(b => b.value === border) || borderOptions[0]
    return sizeItem.price + borderItem.extra
  }, [size, border])

  return (
    <section className="configurator" id="print-configurator">
      <div className="configurator-inner">
        <h2 className="section-title">Замовити фотодрук онлайн</h2>

        <div className="config-form">
          {/* Size */}
          <div className="config-group">
            <label className="config-label">
              Формат (розмір) <span className="required">*</span>
            </label>
            <div className="option-buttons">
              {sizes.map(s => (
                <button
                  key={s.value}
                  className={`opt-btn ${size === s.value ? 'active' : ''}`}
                  onClick={() => setSize(s.value)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Paper */}
          <div className="config-group">
            <label className="config-label">
              Тип паперу <span className="required">*</span>
              <span className="info-icon" title="Хімічний друк на фотопапері Fujifilm">i</span>
            </label>
            <div className="option-buttons">
              {papers.map(p => (
                <button
                  key={p}
                  className={`opt-btn ${paper === p ? 'active' : ''}`}
                  onClick={() => setPaper(p)}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Borders */}
          <div className="config-group">
            <label className="config-label">
              Поля
              <span className="info-icon" title="Поля додають фотографії своєрідної естетики">i</span>
            </label>
            <div className="option-buttons">
              {borderOptions.map(b => (
                <button
                  key={b.value}
                  className={`opt-btn ${border === b.value ? 'active' : ''}`}
                  onClick={() => setBorder(b.value)}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="config-group">
            <label className="config-label">
              Кількість фото <span className="required">*</span>
            </label>
            <div className="slider-group">
              <input
                type="range"
                min={1}
                max={500}
                value={qty}
                onChange={e => setQty(Number(e.target.value))}
              />
              <span className="slider-value">{qty}</span>
            </div>
            <p style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>
              Ціна за 1 фото: {unitPrice.toFixed(1)}₴
            </p>
          </div>

          {/* Upload note */}
          <div className="config-group">
            <label className="config-label">Файли для друку</label>
            <div style={{
              border: '2px dashed #ccc',
              borderRadius: '4px',
              padding: '30px 20px',
              textAlign: 'center',
              color: '#888',
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'border-color 0.3s'
            }}>
              📁 Перетягніть файли сюди або натисніть для вибору<br/>
              <small style={{ color: '#aaa' }}>Доступні формати: .jpg, .jpeg, .heic, .tiff, .png</small>
            </div>
          </div>

          {/* Price */}
          <div className="price-section">
            <p className="price-label">Підсумкова ціна ({qty} фото):</p>
            <p className="price-value">{price.toFixed(1)}₴</p>
            <p className="price-note">
              Якщо калькуляція не відбувається, перевірте, чи всі обов'язкові опції обрані.
            </p>
            <button className="add-cart-btn">ДОДАТИ ДО КОШИКА</button>
          </div>
        </div>
      </div>
    </section>
  )
}
