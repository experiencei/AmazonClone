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
    case 'REMOVE__FROM__BASKET':
       const index = state.basket.findIndex(
           (basketItem)  => basketItem.id === action.id
       );
       let newBasket = [...state.basket];

       if (index >= 0) {
          newBasket
       } else {
          console.warn(`cant remove product (id : ${action.id}) as its not in basket`); 
       }
    default:
        return state
    }
}

export default reducer
