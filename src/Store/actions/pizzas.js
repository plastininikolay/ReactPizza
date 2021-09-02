import axios from "axios"
export const setPizzasDis = (items/* , sort, category */) =>({
    type: 'SET_PIZZAS',
    payload: items
    /* {items, sort, category } */
})

export const setPizzasLoaded = (payload) => ({
    type: 'SET_LOADING_STATUS',
    payload
})

export const fetchPizzas = () => (dispatch) => {
    dispatch(setPizzasLoaded(false));
    axios.get('http://localhost:3000/db.json').then(({data})=>{
      dispatch(setPizzasDis(data.pizzas));
    });
}