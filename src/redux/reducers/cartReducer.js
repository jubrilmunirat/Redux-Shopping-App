import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    CLEAR_CART
} from "../actions/cartTypes";
const initialState = {
    cartItems: []
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const exisitingItem = state.cartItems.find((item) => item.id === action.payload.id);
            if (exisitingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 }
                        : item)
                }
            }
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        price: action.payload.price,
                        Image: action.payload.image,
                        quantity: 1

                    }
                ]
            }
        }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload)
            }
        case INCREASE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map((item) => item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item)
            }
        case DECREASE_QUANTITY:
            return {
                ...state, cartItems: state.cartItems.map((item) => item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item)
                    .filter((item) => item.quantity > 0)
            }
        case CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state
    }
}
export default cartReducer