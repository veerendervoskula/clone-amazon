export const initialState = {
    basket: [],
    user: {}
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.id)
            }
        default:
            return state;
    }
}

export default reducer;