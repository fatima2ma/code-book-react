import { Link } from 'react-router-dom';
import hero from '../../../assets/hero.jpg';

function Hero(){
    return(
        <>            
        <div className="flex flex-col items-center bg-white md:flex-row md:max-w-full dark:border-gray-700 dark:bg-gray-800">
            <div className="flex gap-y-3 max-w-5xl flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">The Ultimate E-Book Store</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions
                    Here are the biggest enterprise technology acquisitions
                    of 2021 so far, in reverse chronological order.
                </p>
                <Link to='./products' type="button" className="text-white w-1/3 bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Explore eBooks
                </Link>
            </div>
            <img className="object-cover w-full rounded-lg h-96 md:h-auto md:w-1/2" src={hero} alt=""/>
        </div>
        </>
    )
}
export default Hero;