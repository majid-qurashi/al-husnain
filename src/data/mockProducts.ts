export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  volume: string;
  category: string;
  rating: number;
  volumes?: { label: string; price: number }[];
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Black Opium Attar",
    price: 999,
    imageUrl: "/products/black opuim.jpg",
    volume: "6ml",
    category: "Popular Attar",
    rating: 4.8
  },
  {
    id: "2",
    name: "Rave Now Attar",
    price: 1299,
    imageUrl: "/products/rave_now.jpg",
    volume: "6ml",
    category: "Perfumes",
    rating: 4.9,
    volumes: [
      { label: "8ml", price: 1299 },
      { label: "30ml", price: 3299 }
    ]
  },
  {
    id: "3",
    name: "Baccarat Rouge Attar",
    price: 1499,
    imageUrl: "/products/baccarat_rough.jpg",
    volume: "6ml",
    category: "Perfumes",
    rating: 5.0,
    volumes: [
      { label: "8ml", price: 1499 },
      { label: "30ml", price: 3999 }
    ]
  },
  {
    id: "4",
    name: "Musk Rijali Attar",
    price: 899,
    imageUrl: "/products/musk_rijali.jpg",
    volume: "6ml",
    category: "Popular Attar",
    rating: 4.7
  },
  {
    id: "5",
    name: "Khamrah Attar",
    price: 1199,
    imageUrl: "/products/khamrah.jpg",
    volume: "6ml",
    category: "Perfumes",
    rating: 4.8,
    volumes: [
      { label: "8ml", price: 1199 },
      { label: "30ml", price: 2999 }
    ]
  },
  {
    id: "6",
    name: "BR-540 Luxury Attar",
    price: 1599,
    imageUrl: "/products/BR-540.jpg",
    volume: "6ml",
    category: "Royal Attar",
    rating: 4.9
  },
  {
    id: "7",
    name: "Premium Combo Pack",
    price: 2499,
    imageUrl: "/products/combo pack.jpg",
    volume: "Set of 3",
    category: "Budget Combos",
    rating: 5.0
  },
  {
    id: "8",
    name: "Special Gift Combo",
    price: 2999,
    imageUrl: "/products/combo pack 2.jpg",
    volume: "Set of 3",
    category: "Budget Combos",
    rating: 4.9
  }
];
