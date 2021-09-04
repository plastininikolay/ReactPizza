import React from 'react';
import Categories from "../../components/Categories/Categories";
import Sort from '../../components/Sort/Sort';
import PizzaCard from "../../components/PizzaCard/PizzaCard";


import {useDispatch, useSelector} from "react-redux";
import {fetchPizzas} from "../../Store/actions/pizzas";
import {changeCategory, changeSort} from '../../Store/actions/filter';
import {addPizzaToCart} from "../../Store/actions/cart";

export const categoriesList = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
function Home() {
  const dispatch = useDispatch();
  
  const pizzas = useSelector((state)=>state.pizzas.items);
  const isLoaded = useSelector((state)=>state.pizzas.isLoaded);
  const activeCategory = useSelector((state)=>state.filter.category);
  const activeSort = useSelector((state) => state.filter.sort);
  const cartPizzas = useSelector((state) => state.cart.items);

  const changeActiveCategory = (payload) => dispatch(changeCategory(payload));
  const changeActiveSort = (payload) => dispatch(changeSort(payload));
  const handleAddPizzaToCart = React.useCallback((obj) => dispatch(addPizzaToCart(obj)),[dispatch]);
  
  const sortList = ['популярности', 'цене', 'алфавиту'];

  const findSamePizza = React.useCallback((id) => {
    const existPizzaById = cartPizzas.find((cartPizza)=> cartPizza.id === id);
    return existPizzaById && existPizzaById.amount
  },[cartPizzas]);
  
  React.useEffect(()=>{
      dispatch(fetchPizzas(activeCategory, activeSort));
  },[dispatch, activeCategory, activeSort])

 
  

  
    return(
        <>
             <div className="content__top">
               <Categories categories = {categoriesList} active = {activeCategory} onChangeActive = {changeActiveCategory}/>
               <Sort setSelectedSortState = {changeActiveSort} activeSort = {activeSort} sortList = {sortList}/>
             </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
             { isLoaded ? pizzas.map((item,idx)=><PizzaCard findPizzaHelper = {findSamePizza} addPizzaToCart={handleAddPizzaToCart} {...item} key={idx} />) : "Загрузка..."}
            </div>
       </>
    )
}
export default Home;