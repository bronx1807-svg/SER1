import React from 'react'

const paperTypes = [
  {
    title: 'Lustre',
    subtitle: 'Fujicolor Crystal Archive',
    desc: 'Універсальний напівматовий тип паперу, який підходить для всіх сюжетів і стилів зйомки. Має чудові характеристики кольоропередачі і незначну текстуру.'
  },
  {
    title: 'Glossy',
    subtitle: 'Fujicolor Glossy',
    desc: 'Глянцевий папір. Має відмінні характеристики кольоропередачі, для тих, хто полюбляє ефектний блиск і класичний настрій.'
  },
  {
    title: 'Silk',
    subtitle: 'Fujicolor Professional Paper',
    desc: 'Має більш виразну текстуру, на якій не залишаються відбитки пальців. Крім того, цей тип паперу має покращені характеристики кольоропередачі.'
  },
  {
    title: 'Pearl',
    subtitle: 'Fujicolor Crystal Archive Digital Pearl Paper',
    desc: 'Перлиноподібні кристали надають кольоровим відбиткам специфічний блиск, створюючи характерний перлинний вигляд. Містить перламутрові кристали слюди, покриті тонким шаром оксидів металів. Надає зображенням інтенсивну теплоту та глибину.'
  }
]

export default function PrintPaperTypes() {
  return (
    <section className="book-types">
      <div className="book-types-inner">
        <h2 className="section-title">4 типи паперу Fujifilm для друку</h2>
        <div className="book-types-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {paperTypes.map((p, i) => (
            <div className="book-type-card" key={i}>
              <h3>{p.title}</h3>
              <p style={{ fontSize: '11px', color: '#888', marginBottom: '12px', letterSpacing: '0.5px' }}>
                {p.subtitle}
              </p>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.7' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: '13px', color: '#888', marginTop: '24px' }}>
          Виробник паперу гарантує більше 50-ти років на стійкість кольору при дотриманні правил зберігання.
        </p>
      </div>
    </section>
  )
}
