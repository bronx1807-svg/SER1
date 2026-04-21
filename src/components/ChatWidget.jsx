import React from 'react'

export default function ChatWidget() {
  return (
    <div className="chat-widget">
      <button className="chat-btn">
        💬 Потрібна допомога?<br/>
        <small>Залишіть повідомлення</small>
      </button>
      <button className="phone-btn" aria-label="Зателефонувати">
        📞
      </button>
    </div>
  )
}
