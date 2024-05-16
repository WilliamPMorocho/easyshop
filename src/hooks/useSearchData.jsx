import { useState, useEffect } from 'react';
import all_product from "../service/all_product";

const useSearchData = (searchTerm) => {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (searchTerm.length > 0) {
            const filteredItems = all_product.filter((item) =>
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