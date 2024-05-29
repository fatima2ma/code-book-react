import { useState, useEffect } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import ProductCard from "../../components/ProductsCard";
import FilterBar from "./components/FilterBar";
import { useLocation } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useFilter } from "../../context/filterContext";
import { getProductList } from "../../services";
import { toast } from "react-toastify";

function ProductsPage(){
    const [showFilter, setShowFilter] = useState(false);
    // const [products, setProducts] = useState([]);
    const search = useLocation().search;
    const searchTerm = new URLSearchParams(search).get('q');
    const {productsList, initialProductList} = useFilter();
    useTitle('Products');

    useEffect(() => {
        async function fetchData(){
            try{
            const data = await getProductList(searchTerm);
            if(data){
                initialProductList(data);
            }
            }catch(e){
                toast.error(e.message);
            }
        }
        fetchData();
    },[searchTerm]); //eslint-disable-line

    return(
        <div className="relative">
            <div className="flex justify-between mb-8 dark:text-gray-200">
                <h1 className="font-bold text-xl">All eBooks ({productsList.length})</h1>
                <div onClick={() => setShowFilter(!showFilter)} className="bg-gray-200 flex items-center cursor-pointer rounded dark:bg-dark">
                    <FaEllipsisVertical/>
                </div>
            </div>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productsList.length > 0 ? productsList.map((product, key) => 
                    <ProductCard key={key} product={product}/>
                ):<p className="font-normal text-base text-gray-700 dark:text-gray-400">No products yet</p>}                
            </div>
            {showFilter && <FilterBar setShowFilter={setShowFilter}/>}
        </div>
    )
}

export default ProductsPage;