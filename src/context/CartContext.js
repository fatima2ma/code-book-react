import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const initialState = {
    cartList: [],
    total: 0
};

const CartContext = createContext(initialState);

export function CartContextProvider({children}){
    const [state, dispatch] = useReducer(cartReducer, initialState);

    function addToCart(product){
        const updatedCartList = state.cartList.concat(product);
        const totalCalc = state.total + product.price;
        dispatch({type: 'ADD_TO_CART', payload: {products: updatedCartList, total: totalCalc}});
    }

    function removeFromCart(product){
        const updatedCartList = state.cartList.filter((curr) => curr.id !== product.id);
        console.log(updatedCartList);
        const totalCalc = state.total - product.price;
        dispatch({type:'REMOVE_FROM_CART', payload:{products: updatedCartList, total: totalCalc}});
    }

    function clearCart(){
        dispatch({type: 'CLEAR_CART'});
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart
    }
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () =>{
    const context = useContext(CartContext);
    return context;
}