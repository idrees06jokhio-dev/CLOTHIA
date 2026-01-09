
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem, User, Order } from './types';
import { db } from './database';

interface StoreContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  user: User | null;
  login: (email: string, pass: string) => Promise<void>;
  register: (name: string, email: string, pass: string) => Promise<void>;
  logout: () => void;
  orders: Order[];
  createOrder: (address: string) => Promise<Order>;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  isLoading: boolean;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(db.getProducts());
  const [cart, setCart] = useState<CartItem[]>(db.getCart());
  const [user, setUser] = useState<User | null>(db.getSession());
  const [orders, setOrders] = useState<Order[]>(db.getOrders());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    db.saveCart(cart);
  }, [cart]);

  useEffect(() => {
    db.saveProducts(products);
  }, [products]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity } 
          : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity } : item));
  };

  const clearCart = () => setCart([]);

  const login = async (email: string, pass: string) => {
    setIsLoading(true);
    try {
      // Simulation of delay and verification
      await new Promise(r => setTimeout(r, 800));
      const found = db.findUser(email);
      if (!found) throw new Error('User not found');
      // In real MERN, we would check bcrypt hash. 
      // For this simulation, password is 'password123' or 'admin' for admin
      if (email === 'admin@luxe.com' && pass !== 'admin') throw new Error('Invalid credentials');
      
      setUser(found);
      db.setSession(found);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, pass: string) => {
    setIsLoading(true);
    try {
      await new Promise(r => setTimeout(r, 800));
      if (db.findUser(email)) throw new Error('Email already registered');
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        role: 'user',
        createdAt: new Date().toISOString()
      };
      db.saveUser(newUser);
      setUser(newUser);
      db.setSession(newUser);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    db.setSession(null);
  };

  const createOrder = async (address: string): Promise<Order> => {
    setIsLoading(true);
    try {
      await new Promise(r => setTimeout(r, 1200));
      const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      const newOrder: Order = {
        id: 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        userId: user?.id || 'guest',
        items: [...cart],
        total,
        status: 'paid',
        address,
        createdAt: new Date().toISOString()
      };
      db.saveOrder(newOrder);
      setOrders(prev => [newOrder, ...prev]);
      clearCart();
      return newOrder;
    } finally {
      setIsLoading(false);
    }
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    db.updateOrder(orderId, status);
    setOrders(db.getOrders());
  };

  return (
    <StoreContext.Provider value={{
      products, setProducts,
      cart, addToCart, removeFromCart, updateQuantity, clearCart,
      user, login, register, logout,
      orders, createOrder, updateOrderStatus,
      isLoading
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) throw new Error('useStore must be used within a StoreProvider');
  return context;
};
