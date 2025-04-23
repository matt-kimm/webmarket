import React from 'react';
import '../css/product-placement-style.css';

const ProductPlacementForm = () => {
  return (
    <div className="app-container">
      <div className="content">
        <h1>Размещение товара</h1>

        <div className="form-group">
          <label className="form-title">Бренд товара<span className='span-color'> *</span></label>
          <input type="text" id="brand" placeholder="Введите бренд товара" />
        </div>

        <div className="form-group">
          <label className="form-title">Название товара<span className='span-color'> *</span></label>
          <input type="text" id="name" placeholder="Введите название товара" />
        </div>

        <div className="form-group">
          <label className="form-title">Категория<span className='span-color'> *</span></label>
          <input type="text" id="catigory" placeholder="Введите категорию" />
        </div>

        <div className="form-group">
          <label className="form-title">Цена на сайте (руб)<span className='span-color'> *</span></label>
          <input type="number" id="price_site" placeholder="Введите цену" />
        </div>

        <div className="form-group">
          <label className="form-title">Цена клиента<span className='span-color'> *</span></label>
          <input type="number" id="price_client" placeholder="Введите цену" />
        </div>

        <div className="form-group">
          <label className="form-title">Фото товара<span className='span-color'> *</span></label>
          <div className="upload-box">
            <input type="file" id="photo" accept="image/*" />
            <span>Выберите изображение</span>
          </div>
        </div>

        <div className="form-group">
          <label className="form-title">Кол-во сделок со скидкой<span className='span-color'> *</span></label>
          <input
            type="number"
            id="discount_total"
            placeholder="Максимальное количество сделок"
          />
        </div>

        <div className="form-group">
          <label className="form-title">Кол-во сделок со скидкой в день<span className='span-color'> *</span></label>
          <input type="number" id="discount_day1" placeholder="Сделок в день" />
        </div>

        <div className="form-group">
          <label className="form-title">Кол-во сделок со скидкой в день<span className='span-color'> *</span></label>
          <input type="number" id="discount_day2" placeholder="Сделок в день" />
        </div>

        <div className="form-group">
          <label className="form-title">Ключевые слова для поиска<span className='span-color'> *</span></label>
          <input
            type="text"
            id="keywords"
            placeholder="Например: красная рубашка, рубашка мужская"
          />
          <small>
            Введите обычные слова через запятую, например: красная рубашка,
            мужская одежда
          </small>
        </div>

        <div className="form-group">
          <label className="form-title">Артикул<span className='span-color'> *</span></label>
          <input type="text" id="article" placeholder="Введите артикул" />
        </div>

        <div className="form-group">
          <label className="form-title">Ваш ник в телеграм<span className='span-color'> *</span></label>
          <input type="text" id="telegram" placeholder="Например: Alexon" />
          <small>Как вас можно будет отметить @, t.me/...</small>
        </div>

        <div className="form-group">
          <label className="form-title">Условия для отзыва<span className='span-color'> *</span></label>
          <input
            type="text"
            id="review_conditions"
            placeholder="Например: отзыв с фото, количество звезд: 5"
          />
        </div>

        <p className="required-note"><span className='span-color'>* </span>Обязательное поле для ввода</p>

        <button className="submit-btn">Продолжить</button>
      </div>

      <footer className="bottom-navigation">
        <button className="nav-button add"></button>
        <button className="nav-button home"></button>
        <button className="nav-button cart"></button>
        <button className="nav-button profile"></button>
      </footer>
    </div>
  );
};

export default ProductPlacementForm;
