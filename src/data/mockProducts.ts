export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  volume: string;
  category: string;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Mahraaz Attar - Deep Oriental Luxury",
    price: 1299,
    imageUrl: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
    volume: "7ml",
    category: "Attar"
  },
  {
    id: "2",
    name: "Dubai Oud - Rich Arabian Oud Attar",
    price: 1499,
    imageUrl: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
    volume: "6ml",
    category: "Oud"
  },
  {
    id: "3",
    name: "Bubble Gum Attar - Sweet & Luxurious",
    price: 899,
    imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    volume: "7ml",
    category: "Sweet"
  },
  {
    id: "4",
    name: "Purple Oud - Premium Car Hanging Perfume",
    price: 499,
    imageUrl: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=600&q=80",
    volume: "10ml",
    category: "Car Perfume"
  },
  {
    id: "5",
    name: "Ameer Al Oud - Long Lasting Arabic Perfume",
    price: 1999,
    imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
    volume: "12ml",
    category: "Oud"
  },
  {
    id: "6",
    name: "9PM - Sweet Vanilla Evening Attar",
    price: 1099,
    imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=600&q=80",
    volume: "7ml",
    category: "Evening"
  },
  {
    id: "7",
    name: "HAWAS - Fresh Aquatic Fruity Attar",
    price: 1199,
    imageUrl: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
    volume: "7ml",
    category: "Fresh"
  },
  {
    id: "8",
    name: "SHINAYA - Elegant Floral & Musky Attar",
    price: 1399,
    imageUrl: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
    volume: "7ml",
    category: "Floral"
  }
];
