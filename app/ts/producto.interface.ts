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

  interface ProductoFormikValues {
    title: string;
    price: string | number;
    description: string;
    image: string;
  }

  export type { Producto, Rating, ProductoFormikValues };