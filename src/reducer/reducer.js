export const initialState = {
    basket : []
}

//selector
export const getBasketTotal = (basket)  => basket?.reduce((amount , item) =>  item.price  + amount , 0)

const reducer = (state = initialState, { type, item }) => {
    switch (type) {

    case 'ADD_TO_BASKET':
        return { ...state, 
            basket : [...state.basket , item]
         }
    default:
        return state
    }
}

export default reducer
