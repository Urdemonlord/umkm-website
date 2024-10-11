import React, { useState } from 'react';
import './ProductList.css'; // Pastikan file CSS ini ada

const products = [
  { id: 1, name: 'Pisang Coklat Klasik', price: 15000, image: '/pisang-coklat-klasik.jpg' },
  { id: 2, name: 'Pisang Coklat Keju', price: 17000, image: '/pisang-coklat-keju.jpg' },
  { id: 3, name: 'Pisang Coklat Cokelat', price: 20000, image: '/pisang-coklat-klasik.jpg' },
  // Tambahkan produk lain sesuai kebutuhan
];

function ProductList({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // Tambahkan state untuk kategori
  const [sortOrder, setSortOrder] = useState('asc'); // Tambahkan state untuk urutan sort

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(product => !selectedCategory || product.category === selectedCategory)
   .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price); // Sortir berdasarkan harga

  return (
    <div className="product-list">
      <input 
        type="text" 
        placeholder="Cari produk..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <div>
        <label>Kategori: </label>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Semua</option>
          <option value="Kategori 1">Kategori 1</option>
          <option value="Kategori 2">Kategori 2</option>
          {/* Tambahkan kategori lain sesuai kebutuhan */}
        </select>
        
        <label>Urutkan berdasarkan harga: </label>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Ascend</option>
          <option value="desc">Descend</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="product-price">Rp{product.price.toLocaleString('id-ID')}</p>
            <button onClick={() => addToCart(product)}>Tambah ke Keranjang</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
