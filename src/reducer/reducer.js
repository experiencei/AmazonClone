export const initialState = {
    basket : [],
    user : null
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
           (basketItem)  => basketItem.id === item.id
       );
       let newBasket = [...state.basket];

       if (index >= 0) {
          newBasket.splice(index , 1)
       } else {
          console.warn(`cant remove product (id : ${item.id}) as its not in basket`); 
       }


       return {
           ...state,
           basket : newBasket
       }
       
    default:
        return state
    }
}

export default reducer
