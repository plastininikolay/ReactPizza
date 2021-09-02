import React from 'react';
import Categories from "../../components/Categories/Categories";
import Sort from '../../components/Sort/Sort';
import PizzaCard from "../../components/PizzaCard/PizzaCard";


import {useDispatch, useSelector} from "react-redux";
import {fetchPizzas} from "../../Store/actions/pizzas";

function Home() {
  const dispatch = useDispatch();
  const pizzas = useSelector((state)=>state.pizzas.items);
  const isLoaded = useSelector((state)=>state.pizzas.isLoaded);
  const categoriesList = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
  
  const [activeCategory, setActiveCategory] = React.useState(0);
  const sortList = ['популярности', 'цене', 'алфавиту'];

  const [selectedSortState, setSelectedSortState] = React.useState(sortList[0]);
  const sortChangeHandler = (event) => {setSelectedSortState(event.target.innerText);};
  
  React.useEffect(()=>{
      dispatch(fetchPizzas());
  },[])

 


  
    return(
        <>
             <div className="content__top">
               <Categories categories = {categoriesList} active = {activeCategory} onChangeActive = {setActiveCategory}/>
               <Sort activeSort = {selectedSortState} sortChangeHandler = {sortChangeHandler} sortList = {sortList}/>
             </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
             { isLoaded ? pizzas.map((item,idx)=><PizzaCard {...item} key={idx} />) : "Загрузка..."}
            </div>
       </>
    )
}
export default Home;