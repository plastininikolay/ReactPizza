const initialState = {items: [], totalPrice: 0, count: 0};

const cart = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            action.payload.amount = 1;
            const newItem = () => {      
                const existItemIndex = state.items.findIndex((ob)=> ob.id === action.payload.id);
                if (existItemIndex !== -1 )
                {
                    if (state.items[existItemIndex].activeType === action.payload.activeType &&
                        state.items[existItemIndex].activeSize === action.payload.activeSize)
                        {
                            state.items[existItemIndex].amount += 1;
                            return [...state.items] 
                        }
                    else {
                        return [...state.items, action.payload]
                    }
                }                   
                else {
                   
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
        case 'CLEAN_ALL_CART':
            return {
                items: [], 
                totalPrice: 0, 
                count: 0
            }
        case 'PLUS_CHANGED_PIZZA':
            const plusItem = () => {      
                const existItemIndex = state.items.findIndex((ob)=> ob.id === action.payload.id);
                if (existItemIndex !== -1)
                {
                    state.items[existItemIndex].amount += 1;
                    return [...state.items] 
                } else {
                    return [...state.items, action.payload]
                }
            }
            const countPlus = state.count+1;
            return {
                items: plusItem(), 
                totalPrice: state.totalPrice + action.payload.price, 
                count: countPlus
            }
        case 'MINUS_CHANGED_PIZZA':
            const minusItem = () => {      
                const existItemIndex = state.items.findIndex((ob)=> ob.id === action.payload.id);
                if (existItemIndex !== -1)
                {
                    state.items[existItemIndex].amount -= 1;
                    return [...state.items] 
                } else {
                    return [...state.items]
                }
            }
            const countMinus = state.count-1;
            return {
                items: minusItem(), 
                totalPrice: state.totalPrice - action.payload.price, 
                count: countMinus
            }
        case 'DELITE_THIS_PIZZA':
            const deliteItem = () => {      
                const existItemIndex = state.items.findIndex((ob)=> ob.id === action.payload.id);
                if (existItemIndex !== -1)
                {
                    state.items.splice(existItemIndex, 1);
                    state.totalPrice = state.totalPrice - action.payload.price * action.payload.amount
                    state.count = state.count - action.payload.amount
                    return [...state.items] 
                } else {
                    return [...state.items]
                }
            }
            return {
                items: deliteItem(), 
                totalPrice: state.totalPrice, 
                count: state.count
            }
        default:
            return state;
           
    }
}

export default cart;