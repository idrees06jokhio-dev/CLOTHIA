
import { Product, User, Order, CartItem } from './types';
import { INITIAL_PRODUCTS } from './mockData';

const DB_KEYS = {
  PRODUCTS: 'luxe_products',
  USERS: 'luxe_users',
  ORDERS: 'luxe_orders',
  SESSION: 'luxe_session',
  CART: 'luxe_cart'
};

// Initialization
if (!localStorage.getItem(DB_KEYS.PRODUCTS)) {
  localStorage.setItem(DB_KEYS.PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
}
if (!localStorage.getItem(DB_KEYS.USERS)) {
  const admin: User = {
    id: 'admin_1',
    name: 'Admin User',
    email: 'admin@luxe.com',
    role: 'admin',
    createdAt: new Date().toISOString()
  };
  localStorage.setItem(DB_KEYS.USERS, JSON.stringify([admin]));
}
if (!localStorage.getItem(DB_KEYS.ORDERS)) {
  localStorage.setItem(DB_KEYS.ORDERS, JSON.stringify([]));
}

export const db = {
  // Products
  getProducts: (): Product[] => JSON.parse(localStorage.getItem(DB_KEYS.PRODUCTS) || '[]'),
  saveProducts: (products: Product[]) => localStorage.setItem(DB_KEYS.PRODUCTS, JSON.stringify(products)),
  
  // Users
  getUsers: (): User[] => JSON.parse(localStorage.getItem(DB_KEYS.USERS) || '[]'),
  saveUser: (user: User) => {
    const users = db.getUsers();
    users.push(user);
    localStorage.setItem(DB_KEYS.USERS, JSON.stringify(users));
  },
  findUser: (email: string) => db.getUsers().find(u => u.email === email),
  
  // Orders
  getOrders: (): Order[] => JSON.parse(localStorage.getItem(DB_KEYS.ORDERS) || '[]'),
  saveOrder: (order: Order) => {
    const orders = db.getOrders();
    orders.unshift(order);
    localStorage.setItem(DB_KEYS.ORDERS, JSON.stringify(orders));
  },
  updateOrder: (orderId: string, status: Order['status']) => {
    const orders = db.getOrders().map(o => o.id === orderId ? { ...o, status } : o);
    localStorage.setItem(DB_KEYS.ORDERS, JSON.stringify(orders));
  },

  // Session
  getSession: (): User | null => {
    const session = localStorage.getItem(DB_KEYS.SESSION);
    return session ? JSON.parse(session) : null;
  },
  setSession: (user: User | null) => {
    if (user) localStorage.setItem(DB_KEYS.SESSION, JSON.stringify(user));
    else localStorage.removeItem(DB_KEYS.SESSION);
  },

  // Cart
  getCart: (): CartItem[] => JSON.parse(localStorage.getItem(DB_KEYS.CART) || '[]'),
  saveCart: (cart: CartItem[]) => localStorage.setItem(DB_KEYS.CART, JSON.stringify(cart))
};
