import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
function CartCard({product}){
    const {removeFromCart} = useCart();
    return(
        <>            
        <div className="w-full flex flex-col justify-between border-b border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={product.poster} alt="product-image"/>
            <div className="flex-1 flex flex-col justify-between p-4 leading-normal">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <Link to={`/product/${product.id}`}>
                    {product.name}
                    </Link>
                </p>
                <button onClick={() => removeFromCart(product)} className="w-fit p-1 text-red-400">remove from list</button>
            </div>
            <span className="font-bold text-gray-700 dark:text-gray-400 p-4">${product.price}</span>
        </div>
        </>
    )
}

export default CartCard;