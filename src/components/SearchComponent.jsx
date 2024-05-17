import React, { useState } from 'react';
import useSearchData from "../hooks/useSearchData";
import {Link} from "react-router-dom";


const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredData = useSearchData(searchTerm);
    const [showSearchResults, setShowSearchResults] = useState(false);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        setShowSearchResults(true);
    };

    const handleResultClick = (item) => {
        setShowSearchResults(false); // Ocultar el diálogo de resultados al hacer clic en una coincidencia
        setSearchTerm('')
    };
    return (
        <div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                {showSearchResults&&filteredData.length > 0 && (
                    <ul className="search-results">
                        {filteredData.map((item) => (
                            <li key={item.id} onClick={() => handleResultClick(item)}>
                                <Link to={`/productodetalle/${item.id}`}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </div>
    );
};

export default SearchComponent;