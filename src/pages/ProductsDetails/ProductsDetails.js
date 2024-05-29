import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { getProduct } from "../../services";
import useTitle from "../../hooks/useTitle";
import { toast } from "react-toastify";

function ProductDetails(){
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [title, setTitle] = useState('');
    const [isInList, setIsInList] = useState(false);
    const {cartList, addToCart, removeFromCart} = useCart();
    useTitle(title);

    useEffect(() => {
        async function fetchData(){
            try{
                const data = await getProduct(id);
                if(data){
                    setProduct(data);
                    setTitle(data.name);
                }
            }catch(e){
                toast.error(e.message);
            }
        }
        fetchData();
    },[id]);

    useEffect(() => {
        let check = cartList.find(item => item.id === product.id);
        check ? setIsInList(true) : setIsInList(false);
        console.log(check);
    },[cartList, product.id]);

    return(
        <>
        {product.length !== 0?
        <div className="flex flex-col gap-6 items-center w-full">
            <div className="">
                <h5 className="text-3xl mb-4 text-center font-semibold tracking-tight text-gray-900 dark:text-gray-400">{product.name}</h5>
                <p class="font-normal text-base text-gray-700 dark:text-gray-400">{product.overview}</p>
            </div>
            <div className="flex gap-6 w-full bg-white dark:bg-gray-800">
                <img className="rounded w-1/2 max-w-xl" src={product.poster} alt="product image" />
                <div className="px-5 pb-5 mt-5 flex flex-col gap-4">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                    <div className="flex items-center">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            {Array(5).fill(0).map((_, key) => 
                                <svg key={key} className={`w-4 h-4 ${product.rating > key? "text-yellow-300" : "text-gray-200 dark:text-gray-600"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                            )}                                    
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{product.rating}.0</span>
                    </div>
                    <div className="tags flex gap-2">
                        {product.best_seller && <span className="px-2 py-1 rounded shadow w-fit text-sm text-yellow-600 bg-gray-200">best seller</span>}
                        <span className={`${product.in_stock? 'text-green-600':'text-red-400'} px-2 py-1 rounded shadow w-fit text-sm bg-gray-200`}>
                            {product.in_stock? 'in stock' : 'out of stock'}
                        </span>
                        <span className="px-2 py-1 rounded shadow w-fit text-sm text-blue-400 bg-gray-200">{product.size} MB</span>
                    </div>
                    <div className="flex items-center justify-between">
                        {isInList? 
                        <button onClick={() => removeFromCart(product)} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            remove from cart
                        </button>
                        :
                        <button onClick={() => product.in_stock && addToCart(product)} disabled={!product.in_stock} className={`${product.in_stock? 'cursor-pointer' : 'cursor-not-allowed'} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                            Add to cart
                        </button>
                        }
                    </div>
                    <p className="text-base text-gray-600 dark:text-gray-200">{product.long_description}</p>
                </div>
            </div>
        </div>
        :<p className="font-normal text-base text-gray-700 dark:text-gray-400">no product</p>
        }
        </>
    )
}

export default ProductDetails;