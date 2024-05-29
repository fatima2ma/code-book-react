import { useState } from "react";
import CartEmpty from "./components/CartEmpty";
import CartCard from "./components/CartCard";
import CheckOut from "./components/CheckOut";
import { FaArrowRight } from "react-icons/fa6";
import useTitle from "../../hooks/useTitle";
import { useCart } from "../../context/CartContext";

function CartPage(){
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const {cartList, total} = useCart();
    useTitle(`Cart ${cartList.length}`);
    return(
        <>
            <section className="w-full my-6 text-center">
                    <h2 className="text-xl font-bold tracking-tight underline text-gray-900 sm:text-2xl dark:text-gray-200">My Cart List {cartList.length}</h2>
            </section>
           {cartList.length > 0 ?
           cartList.map((product) => (<CartCard product={product}/>))
           : <CartEmpty/> } 
           <section className="w-full flex flex-col justify-between border-b border-gray-200 rounded-lg md:flex-row dark:border-gray-700">
            <h3 className="font-bold text-xl text-gray-700 dark:text-gray-400 px-4 pt-10">Total Price:</h3>
            <span className="font-bold text-xl text-gray-700 dark:text-gray-400 p-4 pt-10">${total}</span>
           </section>
           <section className="flex justify-end w-full">
           <button onClick={() => setCheckoutOpen(true)} to='/products' className="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Place Order 
                <FaArrowRight className="mx-1"/>
            </button>
            </section>
            {checkoutOpen && <CheckOut setCheckoutOpen={setCheckoutOpen}/>}
        </>
    )
};

export default CartPage;