interface Producto {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }
  
  interface Rating {
    rate: number;
    count: number;
  }

  export type { Producto, Rating };