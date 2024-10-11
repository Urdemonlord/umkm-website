import React from 'react';
import './Footer.css'; // Jika Anda ingin menambahkan styling untuk footer

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>&copy; 2024 Piscok Nona Manis. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="#syarat">Syarat & Ketentuan</a></li>
        <li><a href="#privasi">Kebijakan Privasi</a></li>
        <li><a href="#kontak">Kontak</a></li>
        <li><a href="#media-sosial">Media Sosial</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
