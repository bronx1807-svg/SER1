import React from 'react'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>Контакти</h4>
          <a href="tel:+380687470545">тел. +38 068 747 05 45</a>
          <a href="mailto:im.framebook@gmail.com">im.framebook@gmail.com</a>
          <p>Графік: Пн-Пт, 10:00 - 18:00</p>
        </div>
        <div className="footer-col">
          <h4>Фотокниги</h4>
          <a href="#">Класична фотокнига</a>
          <a href="#">Фотокнига Crazy Horse</a>
          <a href="#">Фотокнига Simple</a>
          <a href="#">Фотоальбоми / Книга побажань</a>
          <a href="#">Фотожурнал</a>
          <a href="#">Тиражні фотокниги</a>
        </div>
        <div className="footer-col">
          <h4>Інформація</h4>
          <a href="#">Опис матеріалів</a>
          <a href="#">Технічні умови</a>
          <a href="#">Терміни виробництва</a>
          <a href="#">Верстка фотокниг</a>
          <a href="#">Правила та умови</a>
          <a href="#">F.A.Q.</a>
        </div>
        <div className="footer-col">
          <h4>Продукція</h4>
          <a href="#">Фотодрук</a>
          <a href="#">Фоторамки</a>
          <a href="#">Пакування</a>
          <a href="#">Поліграфія</a>
          <a href="#">Календарі</a>
        </div>
      </div>
      <div className="footer-bottom">
        2025 © Всі права захищені | IM.FRAME
      </div>
    </footer>
  )
}
