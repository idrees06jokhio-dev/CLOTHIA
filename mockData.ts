
import { Product } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Azure Linen Summer Dress',
    description: 'A breathable, sky-blue linen dress perfect for summer afternoons. Features a relaxed fit, sustainable wood buttons, and an elegant A-line silhouette.',
    price: 129,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=800',
    stock: 25,
    rating: 4.8,
    reviewsCount: 45,
    featured: true
  },
  {
    id: '2',
    name: 'Cloud White Oxford Shirt',
    description: 'Ultra-soft premium cotton shirt in crisp white. Tailored fit for a clean, modern professional look. Easy-iron finish.',
    price: 89,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    stock: 40,
    rating: 4.9,
    reviewsCount: 112,
    featured: true
  },
  {
    id: '3',
    name: 'Midnight Heritage Trench',
    description: 'Classic water-resistant trench coat. A timeless staple for transitional weather with adjustable belt and storm flaps.',
    price: 249,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
    stock: 12,
    rating: 4.7,
    reviewsCount: 28
  },
  {
    id: '4',
    name: 'Sky Blue Silk Scarf',
    description: 'Hand-painted silk scarf featuring abstract sky patterns. Adds a touch of luxury and movement to any ensemble.',
    price: 55,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=800',
    stock: 100,
    rating: 4.6,
    reviewsCount: 64
  },
  {
    id: '5',
    name: 'Cerulean Cashmere Sweater',
    description: 'Cozy Grade-A cashmere sweater in a deep cerulean hue. Unmatched softness and warmth for the discerning wearer.',
    price: 180,
    category: 'Unisex',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=800',
    stock: 18,
    rating: 4.9,
    reviewsCount: 89,
    featured: true
  },
  {
    id: '6',
    name: 'Vintage Indigo Slim Jeans',
    description: 'High-waisted raw denim jeans with a slight stretch. Designed to age beautifully and provide a perfect, contouring fit.',
    price: 145,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800',
    stock: 32,
    rating: 4.5,
    reviewsCount: 154
  },
  {
    id: '7',
    name: 'Ivory Silk Evening Blouse',
    description: 'Luxurious heavy-weight silk blouse with a delicate sheen and billowy sleeves. Ideal for evening wear or high-stakes meetings.',
    price: 135,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1564252629749-497c1d96d737?auto=format&fit=crop&q=80&w=800',
    stock: 15,
    rating: 4.7,
    reviewsCount: 42
  },
  {
    id: '8',
    name: 'Modern Slate Chinos',
    description: 'Versatile slim-fit chinos in a neutral slate gray. Crafted from high-density twill for durability and comfort.',
    price: 99,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1624371414361-e670989f6608?auto=format&fit=crop&q=80&w=800',
    stock: 50,
    rating: 4.4,
    reviewsCount: 95
  },
  {
    id: '9',
    name: 'Alpine Expedition Parka',
    description: 'Heavy-duty insulated parka designed for sub-zero temperatures. Features ethically sourced down and a faux-fur hood.',
    price: 450,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1544923246-77307dd654ca?auto=format&fit=crop&q=80&w=800',
    stock: 10,
    rating: 4.9,
    reviewsCount: 12
  },
  {
    id: '10',
    name: 'Full-Grain Leather Belt',
    description: 'Genuine full-grain Italian leather belt with a hand-brushed silver buckle. A lifelong accessory.',
    price: 75,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    stock: 60,
    rating: 4.8,
    reviewsCount: 210
  },
  {
    id: '11',
    name: 'Midnight Velvet Blazer',
    description: 'Exquisite tailored velvet blazer in deep navy. Silk-lined with sharp peak lapels for a commanding presence.',
    price: 299,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    stock: 15,
    rating: 4.9,
    reviewsCount: 22,
    featured: true
  },
  {
    id: '12',
    name: 'Rosewater Satin Midi Skirt',
    description: 'Fluid satin skirt that catches the light with every step. Elasticated waist for a comfortable yet high-fashion look.',
    price: 110,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
    stock: 28,
    rating: 4.6,
    reviewsCount: 56
  },
  {
    id: '13',
    name: 'Storm Grey Tech Bomber',
    description: 'Lightweight tech-fabric bomber jacket. Windproof, water-resistant, and styled for the urban commuter.',
    price: 165,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
    stock: 22,
    rating: 4.7,
    reviewsCount: 39
  },
  {
    id: '14',
    name: 'Essential White Tee Pack',
    description: 'Set of 3 premium pima cotton t-shirts. The ultimate base layer for any wardrobe. Retains shape after washing.',
    price: 60,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    stock: 80,
    rating: 4.8,
    reviewsCount: 312
  },
  {
    id: '15',
    name: 'Boho Floral Maxi Dress',
    description: 'Flowy floral dress with tiered skirt and lace inserts. Perfectly captures the spirit of a modern bohemian.',
    price: 155,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800',
    stock: 14,
    rating: 4.9,
    reviewsCount: 77,
    featured: true
  },
  {
    id: '16',
    name: 'Classic Tan Loafers',
    description: 'Hand-stitched leather loafers with a comfortable rubber sole. Effortless sophistication for any casual occasion.',
    price: 140,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=800',
    stock: 25,
    rating: 4.5,
    reviewsCount: 48
  },
  {
    id: '17',
    name: 'Charcoal Wool Overcoat',
    description: 'A heavyweight wool blend overcoat with a clean, structured silhouette. Designed for the coldest days.',
    price: 320,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1544022613-e87cd75a784a?auto=format&fit=crop&q=80&w=800',
    stock: 15,
    rating: 4.9,
    reviewsCount: 34
  },
  {
    id: '18',
    name: 'Arctic White Hooded Puffer',
    description: 'Ultra-lightweight yet warm puffer jacket. Recycled down filling and a weather-shield outer shell.',
    price: 210,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1544923246-77307dd654ca?auto=format&fit=crop&q=80&w=800',
    stock: 20,
    rating: 4.7,
    reviewsCount: 61
  },
  {
    id: '19',
    name: 'Sun-Kissed Straw Hat',
    description: 'Hand-woven wide-brim straw hat. Essential protection with a vintage resort aesthetic.',
    price: 45,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1533448902724-9130097621c1?auto=format&fit=crop&q=80&w=800',
    stock: 45,
    rating: 4.4,
    reviewsCount: 29
  },
  {
    id: '20',
    name: 'Luxe Navy Lounge Set',
    description: 'Two-piece modal silk lounge set. Designed for elevated relaxation at home or long-haul travel.',
    price: 185,
    category: 'Unisex',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=800',
    stock: 30,
    rating: 5.0,
    reviewsCount: 18,
    featured: true
  }
];

export const CATEGORIES = ['All', 'Women', 'Men', 'Outerwear', 'Accessories', 'Unisex'];
