import React from 'react';
import './About.css'; // Pastikan untuk mengimpor file CSS

function About() {
  return (
    <div className="about-container">
      <h2>Tentang Kami</h2>
      <p>
        Piscok Nona Manis adalah usaha UMKM yang menyediakan pisang coklat dengan berbagai variasi rasa. Kami menggunakan
        bahan-bahan berkualitas untuk menjaga kelezatan setiap gigitan.
      </p>
      <p>
        Dengan pengalaman bertahun-tahun, kami berkomitmen untuk memberikan yang terbaik bagi pelanggan. Setiap produk
        kami dibuat dengan cinta dan perhatian terhadap detail, untuk memastikan kepuasan Anda.
      </p>
      <h3>Visi Kami</h3>
      <p>
        Menjadi pilihan utama dalam penyediaan pisang coklat berkualitas di Indonesia, dengan fokus pada inovasi dan
        kepuasan pelanggan.
      </p>
      <h3>Misi Kami</h3>
      <ul>
        <li>Menawarkan produk berkualitas tinggi dengan harga terjangkau.</li>
        <li>Berinovasi dalam menciptakan variasi rasa baru.</li>
        <li>Membangun hubungan baik dengan pelanggan dan komunitas.</li>
      </ul>
    </div>
  );
}

export default About;
