import React, { useState } from 'react';
import './Buscador.css'

const Buscador = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className='buscador'>
            <input
                type="text"
                placeholder="Buscar héroe por nombre..."
                value={input}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Buscador;
