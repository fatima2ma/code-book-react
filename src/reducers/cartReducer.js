export const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case 'ADD_TO_CART':
            return {...state, cartList: payload.products, total: payload.total};
        case 'REMOVE_FROM_CART':
            return {...state, cartList: payload.products, total: payload.total};
        case 'CLEAR_CART':
            return {cartList:[], total:0}
        default:
            return new Error('something went wrong');
    }
}

