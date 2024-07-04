import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddProviderButton = () => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate('/add')}>Add Provider</button>
    );
};

export default AddProviderButton;
