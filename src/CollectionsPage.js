// This is your existing store - just wrapped as CollectionsPage
// Copy your ENTIRE current App.js content here, but change the component name

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Star, Download, Lock, CreditCard } from 'lucide-react';
import FloatingAvatar from './FloatingAvatar';

const CollectionsPage = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Productivity', 'Mental Wellness', 'Money & Career', 'Morning Routines', 'Mindset'];

  const products = [
    {
      id: 1,
      title: 'The 5-Minute Morning Reset',
      subtitle: 'Transform Your Day Before Coffee',
      price: 17.99,
      category: 'Morning Routines',
      rating: 4.9,
      reviews: 2847,
      image: 'https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&q=80',
      bestseller: true
    },
    {
      id: 2,
      title: 'Atomic Focus',
      subtitle: 'Productivity Hacks That Actually Work',
      price: 24.99,
      category: 'Productivity',
      rating: 4.8,
      reviews: 4231,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
      bestseller: true
    },
    {
      id: 3,
      title: 'Set Boundaries, Keep Peace',
      subtitle: 'The Quick Guide to Saying No',
      price: 19.99,
      category: 'Mental Wellness',
      rating: 4.9,
      reviews: 3654,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80'
    },
    {
      id: 4,
      title: '$1K in 30 Days',
      subtitle: 'Fast Side Hustles That Pay',
      price: 29.99,
      category: 'Money & Career',
      rating: 4.7,
      reviews: 1923,
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
      bestseller: true
    },
    {
      id: 5,
      title: 'Confidence on Command',
      subtitle: 'Instant Techniques for Any Situation',
      price: 22.99,
      category: 'Mindset',
      rating: 4.8,
      reviews: 2145,
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80'
    },
    {
      id: 6,
      title: 'The Burnout Fix',
      subtitle: 'Recover Your Energy in 7 Days',
      price: 21.99,
      category: 'Mental Wellness',
      rating: 4.9,
      reviews: 3892,
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
      bestseller: true
    },
    {
      id: 7,
      title: 'Deep Work Shortcuts',
      subtitle: 'Get More Done in Less Time',
      price: 26.99,
      category: 'Productivity',
      rating: 4.8,
      reviews: 2764,
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80'
    },
    {
      id: 8,
      title: 'Money Mindset Makeover',
      subtitle: 'Reprogram Your Wealth Blueprint',
      price: 24.99,
      category: 'Money & Career',
      rating: 4.7,
      reviews: 1567,
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setShowCart(true);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Updated with Link */}
      <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                MINDSHIFT
              </Link>
              
              <nav className="hidden lg:flex space-x-6">
                <Link to="/" className="text-sm font-medium hover:text-purple-600 transition">Home</Link>
                <Link to="/collections" className="text-sm font-medium text-gray-900 hover:text-purple-600 transition">Collections</Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden sm:block hover:text-purple-600 transition">
                <Search size={20} />
              </button>
              <button 
                onClick={() => setShowCart(!showCart)}
                className="relative hover:text-purple-600 transition"
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                ✨ Digital Downloads • Instant Access
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Life in
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Minutes, Not Months
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Quick-fix guides for productivity, wellness, and success. Download instantly and start winning today.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl transition transform hover:-translate-y-1">
                  Shop Bestsellers
                </button>
                <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition">
                  Browse All Books
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-pink-100 aspect-square flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80" 
                  alt="Transform your life"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-10">
                <div className="flex items-center space-x-2">
                  <Download className="text-purple-600" size={24} />
                  <div>
                    <p className="font-bold text-2xl">Download TODAY</p>
                    <p className="text-sm text-gray-600">The Burnout Fix</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 border-y border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Download className="mx-auto text-purple-600" size={32} />
              <p className="font-semibold">Instant Download</p>
              <p className="text-sm text-gray-600">Start reading now</p>
            </div>
            <div className="space-y-2">
              <Lock className="mx-auto text-purple-600" size={32} />
              <p className="font-semibold">Secure Checkout</p>
              <p className="text-sm text-gray-600">256-bit encryption</p>
            </div>
            <div className="space-y-2">
              <Star className="mx-auto text-purple-600" size={32} />
              <p className="font-semibold">5.0★ Average</p>
              <p className="text-sm text-gray-600">5+ reviews</p>
            </div>
            <div className="space-y-2">
              <CreditCard className="mx-auto text-purple-600" size={32} />
              <p className="font-semibold">30-Day Guarantee</p>
              <p className="text-sm text-gray-600">Risk-free purchase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  {product.bestseller && (
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      BESTSELLER
                    </div>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</p>
                  <h3 className="font-bold text-lg leading-tight group-hover:text-purple-600 transition">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600">{product.subtitle}</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <p className="text-2xl font-bold">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowCart(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold">Your Cart ({cartCount})</h2>
              <button onClick={() => setShowCart(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-600">Your cart is empty</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex space-x-4 border-b pb-4">
                    <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">${item.price}</p>
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          +
                        </button>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-red-500 text-sm hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="border-t p-6 space-y-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl transition">
                  Checkout Now
                </button>
                <p className="text-center text-xs text-gray-500">
                  Instant digital delivery after payment
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Level Up?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join other people in transforming their lives with our instant-access guides
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-2xl transition transform hover:-translate-y-1">
            Browse All Books
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                MINDSHIFT
              </h3>
              <p className="text-gray-400 text-sm">
                Premium digital guides for ambitious achievers
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                <li><Link to="/collections" className="hover:text-white transition">Collections</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition">Downloads</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 MINDSHIFT. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Avatar */}
      <FloatingAvatar />
    </div>
  );
};

export default CollectionsPage;
