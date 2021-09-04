import { categoriesList } from "../../Pages/Home/Home"
const initialState = {items: [], isLoaded: false}
const pizzas = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_PIZZAS':
            const activeCategoryIndex = categoriesList.findIndex((category)=>category === action.payload.category) - 1;

            let newItems = action.payload.items.filter((item) => 
                   item.category === activeCategoryIndex
            );
            if (newItems.length === 0) newItems = action.payload.items; 
            
            switch (action.payload.sort) {
                case 'популярности':
                   
                    newItems.sort(function (a, b) {
                        
                        if (a.rating > b.rating) {
                          return 1;
                        }
                        if (a.rating < b.rating) {
                          return -1;
                        }
                        // a должно быть равным b
                        return 0;
                      });
                      break;
                case 'цене':{
                    newItems.sort(function (a, b) {
                      if (a.price < b.price) {
                        
                        return 1;
                      }
                      if (a.price > b.price) {
                        return -1;
                      }
                      // a должно быть равным b
                      return 0;
                    });
                    break;
                }
                case 'алфавиту':
                    newItems.sort(function (a, b) {
                        if (a.name > b.name) {
                          
                          return 1;
                        }
                        if (a.name < b.name) {
                          return -1;
                        }
                        // a должно быть равным b
                        return 0;
                      });
                     break;
                default: break;
            }
            return {
                ...state,
                items: newItems,
                isLoaded: true
            }
            case 'SET_LOADING_STATUS': 
             return{
                 ...state,
                 isLoaded: action.payload
             }
        default: return state
    }
}
export default pizzas;