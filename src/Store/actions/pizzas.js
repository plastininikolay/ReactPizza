import axios from "axios"
export const setPizzasDis = (items, category, sort) =>({
    type: 'SET_PIZZAS',
    payload: {items, category, sort}
    /* {items, sort, category } */
})

export const setPizzasLoaded = (payload) => ({
    type: 'SET_LOADING_STATUS',
    payload
})

export const fetchPizzas = (activeCategory, activeSort) => (dispatch) => {
    dispatch(setPizzasLoaded(false));
    axios.get('http://localhost:3000/db.json').then(({data})=>{
      dispatch(setPizzasDis(data.pizzas, activeCategory, activeSort));
    });
}