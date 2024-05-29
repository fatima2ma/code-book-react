export const filterReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case "PRODUCTS_LIST":
            return {productsList: payload.products};
        case "BEST_SELLER":
            return {...state, bestSeller: payload.bestSeller};
        case "IN_STOCK":
            return {...state, inStock: payload.inStock};
        case "SORT_BY":
            return {...state, sortBy: payload.sortBy};
        case "RATING":
            return {...state, rating: payload.rating};
        case "CLEAR_FILTER":
            return {
                ...state,
                inStock: false,
                bestSeller: false,
                sortBy: null,
                rating: null,
            }
        default: 
            throw new Error('something went wrong');
    }
}