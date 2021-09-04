import React from 'react';


function PizzaCard({imageUrl, name, price, types, sizes, id, addPizzaToCart, findPizzaHelper}) {
    const avalibaleTypes = ['тонкое', 'традиционное'];
    const [activeSizeIndex, setActiveSizeIndex] = React.useState(0);
    const [activeTypeIndex, setActiveTypeIndex] = React.useState(0);
    const activeType = avalibaleTypes[activeTypeIndex];
    const activeSize = sizes[activeSizeIndex];

    const amount = findPizzaHelper(id);

    const onAddPizza = () => {
        const obj ={ 
            imageUrl,
            name, 
            price, 
            activeType, 
            activeSize, 
            id
        }
        addPizzaToCart(obj);
    }
    


    // const addToCart = (card) => addToCart.push(card)
    return(
        <div className="pizza-block">
            <img className="pizza-block__image" src={imageUrl} alt="Pizza"/>
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((type, idx) => (<li onClick={() =>setActiveTypeIndex(idx)} key={idx}  className={activeTypeIndex === idx ? 'active' : null}>{avalibaleTypes[type]}</li>))}
                </ul>
                <ul>
                    {sizes.map((size, idx) => (<li onClick={()=>setActiveSizeIndex(idx)} className={activeSizeIndex === idx ? 'active' : null} key={idx}>{size} см.</li>) 
                    )}
                </ul>
            </div>
            <div  onClick={onAddPizza} className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div className="button button--outline button--add">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"></path>
                </svg>
                <span>Добавить</span>
                <i>{amount ? amount : 0}</i>
                </div>
            </div>
        </div>
    )
}
export default PizzaCard;