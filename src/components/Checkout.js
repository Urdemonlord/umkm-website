import React, { useState } from 'react';
import './Checkout.css';

function Checkout({ cartItems }) {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('transfer');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    // Logika untuk mengkonfirmasi pembayaran dan mengirimkan data pesanan
    setOrderConfirmed(true);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {orderConfirmed ? (
        <p>Pesanan Anda telah dikonfirmasi!</p>
      ) : (
        <form onSubmit={handleOrderSubmit}>
          <div>
            <label>Alamat Pengiriman:</label>
            <input 
              type="text" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              required 
              placeholder="Masukkan alamat pengiriman" 
            />
          </div>
          <div>
            <label>Pilih Metode Pembayaran:</label>
            <select 
              value={paymentMethod} 
              onChange={(e) => setPaymentMethod(e.target.value)} 
              required
            >
              <option value="transfer">Transfer Bank</option>
              <option value="ewallet">E-Wallet (GoPay, OVO)</option>
              <option value="tunai">Tunai</option>
            </select>
          </div>
          <h3>Ringkasan Pesanan</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - Rp{item.price.toLocaleString('id-ID')}
              </li>
            ))}
          </ul>
          <p>Total: Rp{totalPrice.toLocaleString('id-ID')}</p>
          <button type="submit">Konfirmasi Pesanan</button>
        </form>
      )}
    </div>
  );
}

export default Checkout;
