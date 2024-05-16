import React, { useState } from 'react';
import useSearchData from "../hooks/useSearchData";


const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredData = useSearchData(searchTerm);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <div className="nav-search">
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <ul className="search-results">
                    {filteredData.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default SearchComponent;