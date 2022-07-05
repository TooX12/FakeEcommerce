import { createContext } from "react";
import { Producto } from "../ts/producto.interface";

export const CartContext = createContext<{cart: Producto[]; setCart: React.Dispatch<any>; }>({cart: [], setCart: ()=> null});

export function cartReducer(state: Producto[], item: Producto) {
    return [...state, item];
}
