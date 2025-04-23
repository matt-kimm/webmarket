import React from 'react';
import '../css/ProductPage.css';


// Константы для данных
const PRODUCT_DATA = {
  title: "Название товара",
  price: 500,
  originalPrice: 2750,
  image: "img/red-tshirt.jpg", // Используйте относительные пути
  dealConditions: [
    { label: "Доступно в день:", value: "5 шт." },
    { label: "Цена на маркетплейсе:", value: "2750 ₽" },
    { label: "Цена для Вас:", value: "500 ₽" },
    { label: "Скидка:", value: "70%" }
  ]
};

const NAV_ITEMS = [
  { icon: "/img/add.svg", alt: "Add" },
  { icon: "/img/home.svg", alt: "Home", active: true },
  { icon: "/img/cart.svg", alt: "Cart" },
  { icon: "/img/profile.svg", alt: "Profile" }
];


function ProductPage() {
  return (
    <div className="product-page">
      <header className="product-header">
        <button href="/" className="back-button" aria-label="Назад"></button>
      </header>

      <div className="product-image-container">
        <img
          src={PRODUCT_DATA.image}
          alt={PRODUCT_DATA.title}
          className="product-image"
        />
        <div className="product-details">
          <h1 className="product-title">{PRODUCT_DATA.title}</h1>
          <div className="product-prices">
            <span className="current-price">{PRODUCT_DATA.price} ₽</span>
            <span className="original-price">{PRODUCT_DATA.originalPrice} ₽</span>
          </div>
        </div>
      </div>

      <button className="buy-button">Купить товар</button>

      <div className="deal-conditions">
        <h2>Условия сделки</h2>
        <p>Оплаты в течение 3-5 дней после публикации отзыва</p>
        <div className="deal-table">
          {PRODUCT_DATA.dealConditions.map((item, index) => (
            <div key={index}>
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <footer className="bottom-navigation">
        {NAV_ITEMS.map((item, index) => (
          <button 
            key={index}
            className={`nav-button ${item.active ? 'active' : ''}`}
            aria-label={item.alt}
          >
            <img src={item.icon} alt={item.alt} />
          </button>
        ))}
      </footer>
    </div>
  );
}

export default ProductPage;
