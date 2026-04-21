import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-inner">
        <button className="menu-toggle" aria-label="Меню">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Link to="/" className="logo">im.<span>frame</span></Link>

        <nav>
          <ul className="nav-menu">
            <li><Link to="/photobook" style={location.pathname === '/photobook' || location.pathname === '/' ? {color: '#c5a55a'} : {}}>ФОТОКНИГИ</Link></li>
            <li><Link to="/print" style={location.pathname === '/print' ? {color: '#c5a55a'} : {}}>ФОТОДРУК</Link></li>
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
