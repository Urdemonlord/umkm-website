import React from 'react';
import './Reviews.css'; // Pastikan untuk mengimpor file CSS

function Reviews() {
  const reviews = [
    {
      name: 'Sarah',
      feedback: 'Rasanya enak banget! Sangat direkomendasikan.',
    },
    {
      name: 'Budi',
      feedback: 'Pisang coklatnya sangat lezat dan bervariasi!',
    },
    {
      name: 'Rina',
      feedback: 'Suka banget dengan produk ini. Akan beli lagi!',
    },
  ];

  return (
    <div className="reviews-container">
      <h2>Ulasan Pelanggan</h2>
      <p>Berikan ulasan produk kami dan bagikan pengalaman Anda!</p>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.name}</h3>
            <p>{review.feedback}</p>
          </div>
        ))}
      </div>
      {/* Form ulasan bisa ditambahkan di sini */}
    </div>
  );
}

export default Reviews;
