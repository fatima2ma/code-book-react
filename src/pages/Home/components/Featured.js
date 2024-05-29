import { useState, useEffect } from 'react';
import ProductCard from '../../../components/ProductsCard';
import { featuredProducts } from '../../../services';
import { toast } from 'react-toastify';

function Featured(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try{
                const data = await featuredProducts();
                if(data) setProducts(data);
            }catch(e){
                toast.error(e.message);
            }
        }
        fetchData();
    },[])
    return(
        <>
        <div className="featured">
            <h1 className="title text-center text-2xl font-bold underline my-6 dark:text-gray-200">Featured eBooks</h1>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.length > 0 ? 
                products.map((product, key) => 
                    <ProductCard key={key} product={product}/>
                )
                :<p className='dark:text-gray-200'>no products yet</p>
                }                
            </div>
        </div>
        </>
    )
}

export default Featured;