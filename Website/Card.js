import React from "react";
import Data from "./Data";
import Cards from "./Cards";


const Card = ({handleClick}) => {

    return(
        <>
          {Data.map((item) => {
            return (
                <Cards 
                    key={item.id}
                    imgsrc ={item.imgsrc}
                    price ={item.price}
                    info = {item.info}
                    amount = {item.amount}
                    item ={item} handleClick={handleClick}
                 />
            );
        }
        )}
         
        </>
    );
};

export default Card;