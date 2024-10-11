import React from 'react';
import { useNavigate } from 'react-router-dom'; // Mengimpor useNavigate
import './Cart.css';

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate(); // Membuat instance navigate

  const updateCartItemQuantity = (index, quantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = quantity;
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  // Fungsi untuk menangani navigasi ke halaman checkout
  const handleCheckout = () => {
    navigate('/Checkout'); // Mengarahkan ke halaman checkout
  };

  return (
    <div className="cart">
      <h2>Keranjang Belanja</h2>
      {cartItems.length === 0 ? (
        <p>Keranjang kosong.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - Rp{item.price.toLocaleString('id-ID')}
              <input 
                type="number" 
                value={item.quantity || 1} 
                onChange={(e) => updateCartItemQuantity(index, e.target.value)} 
                min="1"
              />
              <button onClick={() => removeFromCart(index)}>Hapus</button>
            </li>
          ))}
        </ul>
      )}
      <button disabled={cartItems.length === 0} onClick={handleCheckout}>Lanjut ke Pembayaran</button>
    </div>
  );
}

export default Cart;
