import { useContext, createContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducers";

const initialState = {
    productsList: [],
    inStock: false,
    bestSeller: false,
    sortBy: null,
    rating: null,
}

const FilterContext = createContext(initialState);

export function FilterContextProvider({children}){
    const [state, dispatch] = useReducer(filterReducer, initialState);

    function initialProductList(products){
        dispatch({
            type: "PRODUCTS_LIST",
            payload: {products: products}
        })
    };

    function isBestSeller(products){
        return state.bestSeller? products.filter((product) => product.best_seller === true) : products;
    }

    function isInStock(products){
        return state.inStock? products.filter((product) => product.in_stock === true) : products;
    }

    function sortByPrice(products){
        if(state.sortBy === 'lth')
            return products.sort((p1,p2) => Number(p1.price) - Number(p2.price));
        else if(state.sortBy === 'htl')
            return products.sort((p1,p2) => Number(p2.price) - Number(p1.price));
        else
            return products;
    };

    function sortByRating(products){
        if(state.rating === '4Stars')
            return products.filter((product) => product.rating >= 5);
        else if(state.rating === '3Stars')
            return products.filter((product) => product.rating >= 3);
        else if(state.rating === '2Stars')
            return products.filter((product) => product.rating >= 2);
        else if((state.rating === '1Stars'))
            return products.filter((product) => product.rating >= 1);
        else
            return products;
    }

    const filterdList = sortByRating(sortByPrice(isInStock(isBestSeller(state.productsList))));

    const value = {
        state,
        dispatch,
        productsList: filterdList,
        initialProductList
    };
    return(
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
};