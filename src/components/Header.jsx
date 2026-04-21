import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <button className="menu-toggle" aria-label="Меню">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <a href="/" className="logo">im.<span>frame</span></a>

        <nav>
          <ul className="nav-menu">
            <li><a href="#configurator">ФОТОКНИГИ</a></li>
            <li><a href="#">ФОТОДРУК</a></li>
            <li><a href="#">ФОТОРАМКИ</a></li>
            <li><a href="#">ПАКУВАННЯ</a></li>
            <li><a href="#">ПОЛІГРАФІЯ</a></li>
            <li><a href="#">ПРОДУКЦІЯ</a></li>
            <li><a href="#" style={{color:'#c0392b'}}>SALE</a></li>
            <li><a href="#">ФОТОГРАФАМ</a></li>
            <li><a href="#">ІНФО</a></li>
            <li><a href="#footer">КОНТАКТИ</a></li>
          </ul>
        </nav>

        <div className="header-right">
          <button className="cart-btn">
            0.0₴
            <span className="cart-badge">0</span>
          </button>
        </div>
      </div>
    </header>
  )
}
