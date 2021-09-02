const initialState = {items: [], totalPrice: 0, count: 0};

const cart = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            action.payload.amount = 1;
            const newItem = () => {      
                const existItemIndex = state.items.findIndex((ob)=> ob.id === action.payload.id);
                if (existItemIndex !== -1)
                {
                    state.items[existItemIndex].amount += 1;
                    return [...state.items] 
                } else {
                    return [...state.items, action.payload]
                }
            }
            const count = state.count+1;
            return {
                ...state,
                items: newItem(),
                totalPrice: state.totalPrice + action.payload.price,
                count: count
            }
        default:
            return state;
           
    }
}

export default cart;