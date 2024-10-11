import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Login from './auth/Login';
import Register from './auth/Register';
import AdminDashboard from './admin/AdminDashboard';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null); // Menyimpan informasi pengguna yang terautentikasi

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1; // Tambah kuantitas jika produk sudah ada
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]); // Tambah produk baru dengan kuantitas 1
    }
  };

  const handleLogout = () => {
    setUser(null); // Menghapus pengguna dari state
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <img src="/logopiscoknonamanis.png" alt="Logo Piscok Nona Manis" className="logo" />
            <ul className="nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Produk</Link></li>
              <li><Link to="/about">Tentang Kami</Link></li>
              <li><Link to="/reviews">Ulasan</Link></li>
              <li><Link to="/cart">Keranjang</Link></li>
              {!user ? (
                <>
                </>
              ) : (
                <>
                  <li>{user.username} ({user.role})</li>
                  <li><button onClick={handleLogout}>Logout</button></li>
                  {user.role === 'admin' && <li><Link to="/admin">Admin Dashboard</Link></li>}
                </>
              )}
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList addToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
