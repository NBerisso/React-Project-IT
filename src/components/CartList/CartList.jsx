import "./CartList.css";

import CartItem from "../CartItem/CartItem";

import { withDataSources } from "../../data/context";
import { useEffect, useState } from "react";

const cartItemsMock = [
    { productId: 1, size: 'S', color: 'Rojo', count: 2 },
    { productId: 2, size: 'S', color: 'Violeta', count: 1 }
];

let CartList = ({ dataSources }) => {

    let [items, setItems] = useState([]);

    useEffect(() => {
      (async function () {
        const aux = await dataSources.products().all();
        setItems(aux);
        
      })();
    });
  

    const cartItems = 
        cartItemsMock
            .map(it => {
                const aux = items.find(i => i.id == it.productId);

                if (aux == undefined)
                    return it;

                return {
                    title: aux.title,
                    size: it.size,
                    color: it.color,
                    price: aux.price,
                    count: it.count
                }
            })
            .map((val, index) => <CartItem cartItem={val} key={index} />)

    return <div className="cart-item-list">{cartItems}</div>
}

CartList = withDataSources(CartList);

export default CartList;