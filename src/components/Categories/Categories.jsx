import React from 'react';
function Categories({categories, active, onChangeActive}) {
    
    return(
            <div className="categories">
              <ul>
                {categories.map((obj, index) => ( <li onClick={()=>onChangeActive(index)} className={active === index ? `active` : null} key={index}>{obj}</li> )
                )}
              </ul>
            </div>
        
    )
}

export const pepega = (a) => a * 666;  
export default Categories;