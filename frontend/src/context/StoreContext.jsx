import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000"
    const [token, setToken] = useState("");
    const [service_list, setServiceList] = useState([])
    const addTocart = (itemId) => {
        {
            if (!cartItems[itemId]) {
                setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
            }
            else {
                setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
            }
        }

    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getTotalcartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = service_list.find((service) => service._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }


        }
        return totalAmount;
    }
    const fetchServiceList = async () => {
        const response = await axios.get(url + "/api/service/list");
        setServiceList(response.data.data)

    }

    useEffect(() => {

        async function loaddata() {
            await fetchServiceList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));

            }

        }
        loaddata();
    }, [])



    const contextValue = {
        service_list,
        cartItems,
        setCartItems,
        addTocart,
        removeFromCart,
        getTotalcartAmount,
        url,
        token,
        setToken

    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;