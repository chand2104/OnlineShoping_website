import React  from "react";


const Cards =({item , handleClick}) => {

     return (
        <>
             {/* body part- 1  */}
           <section className="body-section"> 
               <div className='card-group'>
                         <div className='card'>
                              <img src={item.imgsrc}></img>
                              <h3>{item.info}</h3>
                              <h2> $ {item.price}</h2>
                              <li>
                                <button>buy it</button>
                                <button className="btn-cart" onClick={()=>handleClick(item)} > Add to Cart</button>
                              </li>  
                         </div>
               </div>
           </section>

  
        </>
    );
};

export default Cards;