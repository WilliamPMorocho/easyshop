import {useState, useEffect, useContext} from 'react';
import {ShopContext} from "../context/ShopContext";


const useSearchData = (searchTerm) => {
const {allProducts} = useContext(ShopContext);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (searchTerm.length > 0) {
            const filteredItems = allProducts.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(filteredItems);
        } else {
            setFilteredData([]); // Limpiar los datos filtrados si no hay término de búsqueda
        }
    }, [searchTerm]);

    return filteredData;
};

export default useSearchData;