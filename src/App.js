import './App.css';
import {Footer} from "./components/Footer";
import GlobalRouter from "./routes/GlobalRouter";
import {ShopContext} from "./context/ShopContext";
import {useState} from "react";
import {useProducts} from "./hooks/useProducts";
import {useNewCollection} from "./hooks/useNewCollection";
import {usePopular} from "./hooks/usePopular";



function App() {
    const [cartItems, setcartItems] = useState([]);
    //const {fetchResponse} = useFetch("https://fakestoreapi.com/products");
    const allProducts = useProducts();
    const newCollections = useNewCollection()
    const popularItems = usePopular();

    const adicionarCarrito = (itemId, size, quantity) => {
        const existingCartItemIndex = cartItems.findIndex(item => item.id === itemId && item.size === size);

        if (existingCartItemIndex !== -1) {
            const updatedCartItems = cartItems.map((item, index) => {
                if (index === existingCartItemIndex) {
                    return {
                        ...item,
                        quantity: item.quantity + quantity
                    };
                }
                return item;
            });
            setcartItems(updatedCartItems);
        } else {
            const cartProduct = allProducts.find((product) => product.id === itemId);
            cartProduct.size = size;
            cartProduct.quantity = quantity;
            setcartItems([...cartItems, cartProduct]);
        }
    };

    const removeFromCart = (itemId) => {
        setcartItems(cartItems.filter((product) => product.id !== itemId));
    };

    const encerarCart = () =>{
        setcartItems([]);
    }

    const getTotalCartAmount = () => {
        return cartItems.reduce((total, product) => total + (product.new_price * product.quantity), 0);
    };

    const getTotalCartItems = () => {
        return cartItems.length;
    };


    return (
        <div className="App">
            <ShopContext.Provider value={{
                allProducts,
                newCollections,
                popularItems,
                cartItems,
                adicionarCarrito,
                removeFromCart,
                getTotalCartAmount,
                getTotalCartItems,
                encerarCart,
            }}>
                <GlobalRouter></GlobalRouter>
            </ShopContext.Provider>
            <Footer></Footer>
        </div>
    );
}

export default App;
