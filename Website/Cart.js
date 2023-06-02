import React, { useEffect, useState } from "react";

const Cart = ({cart , setCart , handleChange}) => {

    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=> item.id !== id);
        setCart(arr);
        // handleRemove();
    }

    useEffect(()=>{
        handlePrice();
    })

    return (
        <>
            {
                cart?.map((item)=>(
                    <div key={item.id} className="cart_box">
                        <div>
                            <img src={item.imgsrc}  className="cart_img"/>
                            <p>{item.info}</p>
                        </div>
                        <div>
                            <button onClick={()=>handleChange(item, +1)}>+</button>
                            <button>{item.amount}</button>
                            <button onClick={()=>handleChange(item, -1)}>-</button>
                        </div>
                        <div>
                            <span> $ {item.price}</span>
                            <button className="remove" onClick={() => handleRemove(item.id)}>Remove</button>
                        </div> 
                    </div>   
                ))}
            <div className="total">
                <span>Total Amount of your Cart</span>
                <span>$ - {price}</span>
            </div>
        </>
    );   
};

export default Cart;