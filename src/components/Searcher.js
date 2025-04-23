import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const products = [
  { id: 1, name: 'Красная футболка', price: 500, img: '/img/red-tshirt.jpg' },
  { id: 2, name: 'Синие джинсы', price: 1500, img: '/img/red-tshirt.jpg' },
  { id: 3, name: 'Зелёная куртка', price: 3000, img: '/img/red-tshirt.jpg' },
  { id: 4, name: 'Белые кроссовки', price: 2500, img: '/img/red-tshirt.jpg' },
  { id: 5, name: 'Чёрная кепка', price: 700, img: '/img/red-tshirt.jpg' },
  { id: 6, name: 'Часы наручные', price: 7000, img: '/img/red-tshirt.jpg' },
  { id: 7, name: 'Табурет', price: 1000, img: '/img/red-tshirt.jpg' },
  { id: 8, name: 'Стол', price: 7000, img: '/img/red-tshirt.jpg' },
];

const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`} key={product.id}>
    <div className='product-card'>
      <img
        className='product-img'
        src={product.img}
        alt={product.name}
        onError={(e) => {
          e.target.alt = 'Изображение не загружено';
        }}
      />
      <div className='prodact-description'>
        <h3>{product.name}</h3>
        <div className='price-container'>
          <span className='main-price'>{product.price} ₽</span>
          <span className="original-price">2 750 ₽</span>
        </div>

      </div>
    </div>
  </Link>
);

export default function ProductSearch() {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => (
    products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase())
    )
  ), [query]);

  return (
    <div className='container-search'>
      <input
        type="text"
        placeholder="Поиск"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={`search-input ${isFocused ? 'focused' : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      <Button />

      {filteredProducts.length > 0 ? (
        <div className='container-item'>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p style={{paddingTop: 10, fontSize: 12, textAlign: 'center'}}>Товары не найдены</p>
      )}
    </div>
  );
}

