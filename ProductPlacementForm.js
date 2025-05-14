import React, { useState, useRef, useEffect } from "react";
import "../css/product-placement-style.css";

const categories = [
  "Электроника",
  "Одежда",
  "Книги",
  "Игрушки",
  "Дом и сад",
];

// Выпадающий список категорий
function CategoryDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <div
        onClick={() => setOpen((v) => !v)}
        style={{
          borderRadius: 20,
          padding: "5px 18px",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          fontSize: 12,
          color: "#9597A6",
          fontWeight: 450,
          userSelect: "none",
        }}
      >
        {value || "Выберите категорию"}
        <span style={{ marginLeft: "auto", color: "#bdbdbd", fontSize: 20 }}>
          V
        </span>
      </div>
      {open && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: 16,
            marginTop: 4,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            listStyle: "none",
            padding: 0,
            zIndex: 100,
          }}
        >
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => {
                onChange(cat);
                setOpen(false);
              }}
              style={{
                padding: "12px 16px",
                cursor: "pointer",
                borderBottom: "1px solid #f5f5f5",
                background: value === cat ? "#f2f2f2" : "#fff",
              }}
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Кастомная кнопка загрузки файла
function FileInput({ value, onChange }) {
  const ref = useRef();

  return (
    <div
      className="upload-btn"
      onClick={() => ref.current.click()}
    >
      <input
        type="file"
        ref={ref}
        style={{ display: "none" }}
        accept="image/*"
        onChange={onChange}
      />
      <span style={{ color: value ? "#222" : "#9597A6", fontWeight: value ? "450" : "450", fontSize: 12 }}>
        {value ? value.name : "Выберите изображение"}
      </span>
      <img className="upload-icon"/>
    </div>
  );
}

// Авторасширяемый textarea
function AutoResizeTextarea({ value, onChange, ...props }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}

const initialForm = {
  brand: "",
  name: "",
  category: "",
  price_site: "",
  price_client: "",
  photo: null,
  discount_total: "",
  discount_day1: "",
  discount_day2: "",
  keywords: "",
  article: "",
  telegram: "",
  conditions: "",
};

const ProductPlacementForm = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleCategoryChange = (cat) => {
    setForm((prev) => ({ ...prev, category: cat }));
  };

  const handlePhotoChange = (e) => {
    setForm((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { photo, ...rest } = form;
    const dataToSave = {
      ...rest,
      photo: photo ? photo.name : "",
    };
    const json = JSON.stringify(dataToSave, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "form-data.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit}>
        <div className="content">
          <h1>Размещение товара</h1>
          <div className="form-group">
            <label className="form-title">
              Бренд товара<span className="span-color">*</span>
            </label>
            <input
              type="text"
              name="brand"
              value={form.brand}
              onChange={handleChange}
              placeholder="Введите бренд товара"
            />
          </div>
          <div className="form-group">
            <label className="form-title">
              Название товара<span className="span-color">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Введите название товара"
            />
          </div>
          <div className="form-group">
            <label className="form-title">
              Категория<span className="span-color">*</span>
            </label>
            <CategoryDropdown value={form.category} onChange={handleCategoryChange} />
          </div>
          <div className="form-group">
            <label className="form-title">
              Цена на сайте (руб)<span className="span-color">*</span>
            </label>
            <input
              type="text"
              name="price_site"
              value={form.price_site}
              onChange={handleChange}
              placeholder="Введите цену на сайте"
            />
          </div>
          <div className="form-group">
            <label className="form-title">
              Цена клиента<span className="span-color">*</span>
            </label>
            <input
              type="text"
              name="price_client"
              value={form.price_client}
              onChange={handleChange}
              placeholder="Введите цену для клиента"
            />
          </div>
          <div className="form-group">
            <label className="form-title">
              Фото товара<span className="span-color">*</span>
            </label>
            <FileInput value={form.photo} onChange={handlePhotoChange} />
          </div>
          <div className="form-group">
            <label className="form-title">
              Кол-во сделок со скидкой<span className="span-color">*</span>
            </label>
            <input
              type="text"
              name="discount_total"
              value={form.discount_total}
              onChange={handleChange}
              placeholder="Максимальное количество сделок"
            />
          </div>
          <div className="form-group">
            <label className="form-title">
              Кол-во сделок со скидкой в день<span className="span-color">*</span>
            </label>
            <input
              type="text"
              name="discount_day1"
              value={form.discount_day1}
              onChange={handleChange}
              placeholder="Сделок в день"
            />
          </div>
          <div className="form-group">
            <label className="form-title">
              Кол-во сделок со скидкой в день<span className="span-color">*</span>
            </label>
            <input
              type="text"
              name="discount_day2"
              value={form.discount_day2}
              onChange={handleChange}
              placeholder="Сделок в день"
            />
          </div>
          <div className="form-group">
            <label className="form-title">
              Ключевые слова для поиска<span className="span-color">*</span>
            </label>
            <AutoResizeTextarea
              className="expandable-input"
              name="keywords"
              value={form.keywords}
              onChange={handleChange}
              placeholder="Например: красная рубашка, рубашка мужская"
              rows={1}
            />
            <small className="tips">
              Вводите обязательные слова через запятую, как показано в примере
            </small>
          </div>
          <div className="form-group">
            <label className="form-title">
              Артикул<span className="span-color">*</span>
            </label>
            <input
              type="text"
              name="article"
              value={form.article}
              onChange={handleChange}
              placeholder="Введите артикул"
            />
          </div>
          <div className="form-group">
            <label className="form-title">
              Ваш ник в телеграм<span className="span-color">*</span>
            </label>
            <input
              type="text"
              name="telegram"
              value={form.telegram}
              onChange={handleChange}
              placeholder="Например: Alexon"
            />
            <small className="tips">Ваш ник <b>не</b> должен содержать @, https://t.me/</small>
          </div>
          <div className="form-group">
            <label className="form-title">
              Условия для отзыва<span className="span-color">*</span>
            </label>
            <AutoResizeTextarea
              className="expandable-input"
              name="conditions"
              value={form.conditions}
              onChange={handleChange}
              placeholder="Например: отзыв с фото, количество звезд: 5"
              rows={1}
            />
          </div>
          <p className="required-note">
            <span className="span-color">*</span> Обязательное поле для ввода
          </p>
          <button className="submit-btn">Продолжить</button>
        </div>
      </form>
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
