
import React, { useState, useEffect } from 'react';
import { StoreProvider, useStore } from './store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import AdminProducts from './pages/AdminProducts';
import AdminOrders from './pages/AdminOrders';

const Router: React.FC = () => {
  const [route, setRoute] = useState<string>(window.location.hash || '#/');
  const { user } = useStore();

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simple route matcher
  const renderContent = () => {
    const path = route.split('?')[0];
    const params = new URLSearchParams(route.split('?')[1]);
    const id = params.get('id');

    switch (path) {
      case '#/': return <Home />;
      case '#/shop': return <Shop />;
      case '#/product': return <ProductDetail id={id || ''} />;
      case '#/cart': return <Cart />;
      case '#/checkout': return <Checkout />;
      case '#/login': return <Login />;
      case '#/register': return <Register />;
      case '#/profile': return user ? <Profile /> : <Login />;
      case '#/admin': return user?.role === 'admin' ? <AdminDashboard /> : <Home />;
      case '#/admin/products': return user?.role === 'admin' ? <AdminProducts /> : <Home />;
      case '#/admin/orders': return user?.role === 'admin' ? <AdminOrders /> : <Home />;
      default: return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  );
};

export default App;
