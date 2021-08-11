import { useEffect, useState } from "react"
import { products } from "../../sample";

export const Home = () => {
    const [items, setItems] = useState([]);

    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        setItems(products)
    }, []);

    const handleAddClick = (itemId) => {
        for (let item of items) {
            if (item && item._id === itemId) {
                const totalItems = [...cartItems, item];
                setCartItems(totalItems);
                break;
            }
        }
    }

    const handleItemDelete = (itemId) => {
        if (cartItems && Array.isArray(cartItems)) {
            const remainingItems = cartItems.filter((cartItem) => cartItem._id !== itemId);
            setCartItems(remainingItems);
        }
    }


    const renderItems = () => {
        if (products && Array.isArray(products) && products.length > 0) {
            return (
                <>
                    {
                        products.map((item) => {
                            return (
                                <div className="itemContainer">
                                    <div>{item.title}</div>
                                    <div>
                                        <img src={item.image} alt="">
                                        </img>
                                    </div>
                                    <div>{item.description}</div>
                                    <div>{item.prince}</div>
                                    <select>
                                        {item.availableSizes && Array.isArray(item.availableSizes) && item.availableSizes.map((availableSize) =>
                                            <option>{availableSize}</option>
                                        )}
                                    </select>
                                    <button onClick={() => { handleAddClick(item._id) }}>Add</button>
                                </div>
                            )
                        })
                    }
                </>
            )
        }
    }

    const renderCart = () => {
        if (cartItems && cartItems.length > 0) {
            return (
                <>
                    {
                        cartItems.map((item) => {
                            return (
                                <div className="itemContainer">
                                    <div>{item.title}</div>
                                    <div>
                                        <img src={item.image} alt="">
                                        </img>
                                    </div>
                                    <div>{item.description}</div>
                                    <div>{item.prince}</div>
                                    <select>
                                        {item.availableSizes && Array.isArray(item.availableSizes) && item.availableSizes.map((availableSize) =>
                                            <option>{availableSize}</option>
                                        )}
                                    </select>
                                    <button onClick={() => { handleItemDelete(item._id) }}>Delete</button>
                                </div>
                            )
                        }
                        )
                    }
                </>
            );
        }
    }

    return (
        <div className="container">
            {renderItems()}
            <hr />
            {renderCart()}
        </div>
    )
}