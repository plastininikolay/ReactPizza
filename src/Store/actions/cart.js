export const addPizzaToCart = (pizza) => ({
    type: 'ADD_TO_CART',
    payload: pizza
})
export const cleanAllCart = () => ({
    type: 'CLEAN_ALL_CART',
})
export const plusChangedPizza = (pizza) => ({
    type: 'PLUS_CHANGED_PIZZA',
    payload: pizza
})
export const minusChangedPizza = (pizza) => ({
    type: 'MINUS_CHANGED_PIZZA',
    payload: pizza
})
export const deliteThisPizza = (pizza) => ({
    type: 'DELITE_THIS_PIZZA',
    payload: pizza
})