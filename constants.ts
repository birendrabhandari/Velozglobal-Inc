import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Veloz Air Pro',
    description: 'Next-generation wireless earbuds with active noise cancellation and spatial audio.',
    price: 199.99,
    category: 'Electronics',
    image: 'https://picsum.photos/seed/earbuds/600/600',
    rating: 4.8,
    reviews: 1240
  },
  {
    id: '2',
    name: 'Summit Peak Backpack',
    description: 'Durable, water-resistant backpack designed for both urban commutes and mountain trails.',
    price: 89.00,
    category: 'Travel',
    image: 'https://picsum.photos/seed/backpack/600/600',
    rating: 4.6,
    reviews: 850
  },
  {
    id: '3',
    name: 'Chronos Minimalist Watch',
    description: 'Elegant timepiece featuring a sapphire crystal face and premium Italian leather strap.',
    price: 145.00,
    category: 'Accessories',
    image: 'https://picsum.photos/seed/watch/600/600',
    rating: 4.9,
    reviews: 420
  },
  {
    id: '4',
    name: 'Lumina Smart Lamp',
    description: 'Intelligent lighting with adjustable warmth and brightness, controlled via your smartphone.',
    price: 59.99,
    category: 'Home',
    image: 'https://picsum.photos/seed/lamp/600/600',
    rating: 4.5,
    reviews: 630
  },
  {
    id: '5',
    name: 'Aero Mesh Sneakers',
    description: 'Ultra-lightweight running shoes with breathable mesh and responsive cushioning.',
    price: 120.00,
    category: 'Footwear',
    image: 'https://picsum.photos/seed/sneakers/600/600',
    rating: 4.7,
    reviews: 2100
  },
  {
    id: '6',
    name: 'Zenith Coffee Grinder',
    description: 'Precision burr grinder for the perfect morning brew, featuring 40 grind settings.',
    price: 175.00,
    category: 'Kitchen',
    image: 'https://picsum.photos/seed/coffee/600/600',
    rating: 4.8,
    reviews: 310
  },
  {
    id: '7',
    name: 'Nomad Solar Charger',
    description: 'Portable high-efficiency solar panel for charging your devices anywhere under the sun.',
    price: 75.00,
    category: 'Travel',
    image: 'https://picsum.photos/seed/solar/600/600',
    rating: 4.4,
    reviews: 540
  },
  {
    id: '8',
    name: 'Vortex Gaming Mouse',
    description: 'High-precision optical sensor with customizable RGB lighting and ergonomic design.',
    price: 65.00,
    category: 'Electronics',
    image: 'https://picsum.photos/seed/mouse/600/600',
    rating: 4.9,
    reviews: 1800
  }
];

export const CATEGORIES = ['All', 'Electronics', 'Travel', 'Accessories', 'Home', 'Footwear', 'Kitchen'];
