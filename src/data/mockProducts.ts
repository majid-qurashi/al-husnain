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
    rating: 4.8,
    volumes: [
      { label: "3ml", price: 999 },
      { label: "6ml", price: 1299 },
      { label: "12ml", price: 999 },
      { label: "15ml", price: 999 }
    ]
  },
  {
    id: "2",
    name: "Rave Now ",
    price: 199,
    imageUrl: "/products/rave_now.jpg",
    volume: "6ml",
    category: "Perfumes",
    rating: 4.9,
    volumes: [
      { label: "8ml", price: 199 },
      { label: "30ml", price: 400 }
    ]
  },
  {
    id: "3",
    name: "Baccarat Rouge",
    price: 199,
    imageUrl: "/products/baccarat_rough.jpg",
    volume: "6ml",
    category: "Perfumes",
    rating: 5.0,
    volumes: [
      { label: "8ml", price: 199 },
      { label: "30ml", price: 400 }
    ]
  },
  {
    id: "4",
    name: "Musk Rijali Attar",
    price: 899,
    imageUrl: "/products/musk_rijali.jpg",
    volume: "6ml",
    category: "Popular Attar",
    rating: 4.7,
    volumes: [
      { label: "3ml", price: 999 },
      { label: "6ml", price: 1299 },
      { label: "12ml", price: 999 },
      { label: "15ml", price: 999 }
    ]
  },
  {
    id: "5",
    name: "Khamrah",
    price: 199,
    imageUrl: "/products/khamrah.jpg",
    volume: "6ml",
    category: "Perfumes",
    rating: 4.8,
    volumes: [
      { label: "8ml", price: 199 },
      { label: "30ml", price: 400 }
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
    price: 799,
    imageUrl: "/products/combo pack.jpg",
    volume: "Set of 3",
    category: "Budget Combos",
    rating: 5.0,
    volumes: [
      { label: "30ml", price: 799 }
    ]
    
  },
  {
    id: "8",
    name: "Special Gift Combo",
    price: 349,
    imageUrl: "/products/combo pack 2.jpg",
    volume: "Set of 3",
    category: "Budget Combos",
    rating: 4.9,
    volumes: [
      { label: "8ml", price: 349 }
    ]
  },
  {
    id: "9",
    name: "Luxury Car Hanging",
    price: 249,
    imageUrl: "/products/car hanging.jpeg",
    volume: "Per pack",
    category: "Car Perfumes",
    rating: 4.8
  },
  {
    id: "10",
    name: "Atter Combo Pack",
    price: 399,
    imageUrl: "/products/atter combo 3.jpeg",
    volume: "Set of 3",
    category: "Budget Combos",
    rating: 4.9
  },
  {
    id: "11",
    name: "Trail Atter Combo",
    price: 299,
    imageUrl: "/products/trail atter combo.jpeg",
    volume: "1.5ml each",
    category: "Budget Combos",
    rating: 4.7
  },
  {
    id: "12",
    name: "Gift Pack Itter",
    price: 399,
    imageUrl: "/products/gift pack atter.jpeg",
    volume: "Buy 3 Get 1 Free",
    category: "Budget Combos",
    rating: 5.0
  },
  {
    id: "13",
    name: "8ml Hexa Pack Purfumes",
    price: 599,
    imageUrl: "/products/hexa pack purfumes.jpeg",
    volume: "8ml x 6",
    category: "Perfumes",
    rating: 4.9
  }
];
