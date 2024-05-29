import { Link } from "react-router-dom";
function DashboardCard({order}){
    console.log(order);
    return(
        <>
        <div className="w-full mb-6 p-2 gap-2 border-b border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex justify-between text-sm m-2 font-bold dark:text-slate-200">
            <span>Order Id: {order.id}</span>
            <span>Total: ${order.total}</span>
        </div>
        { order.cartList.map((product) => (
            <div key={product.id} className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5 ">
                <div className="flex">
                    <Link to={`/products/${product.id}`}>
                        <img className="w-32 rounded" src={product.poster} alt={product.name} />
                    </Link>
                    <div className="">
                        <Link to={`/products/${product.id}`}>
                            <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
                        </Link>
                        <div className="text-lg m-2 dark:text-slate-200">
                            <span>${product.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        )) }
        </div>
        </>
    )
}

export default DashboardCard;