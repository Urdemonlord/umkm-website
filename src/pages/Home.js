import React from 'react';
import { Link } from 'react-router-dom'; // Import Link untuk navigasi

import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Selamat Datang di Piscok Nona Manis!</h1>
        <p>Nikmati lezatnya pisang coklat dengan rasa terbaik. Buatan lokal, rasa nasional!</p>
        <img src="/logo192.png" alt="Logo Piscok Nona Manis" className="home-logo" />
      </header>

      <section className="home-features">
        <h2>Kenapa Memilih Kami?</h2>
        <div className="feature">
          <h3>Rasa Terbaik</h3>
          <p>Pisang coklat kami terbuat dari bahan-bahan pilihan untuk rasa yang tak tertandingi.</p>
        </div>
        <div className="feature">
          <h3>Produk Lokal</h3>
          <p>Dukungan untuk produk lokal yang membuat setiap gigitan lebih bermakna.</p>
        </div>
        <div className="feature">
          <h3>Pembelian Mudah</h3>
          <p>Proses pemesanan yang cepat dan aman, hanya dalam beberapa klik.</p>
        </div>
      </section>

      <div className="cta">
        <Link to="/products"> {/* Menggunakan Link untuk navigasi ke ProductList */}
          <button className="cta-button">Lihat Produk Kami</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
