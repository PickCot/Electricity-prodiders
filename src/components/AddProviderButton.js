import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import '../styles/styles.css';

const AddProviderButton = () => {
    const navigate = useNavigate();

    return (
        <Button className="dark-button" onClick={() => navigate('/add')} style={{ cursor: 'pointer' }} variant="outlined" startIcon={<AddCircleOutlineIcon />}>
            Add provider
        </Button>
    );
};

export default AddProviderButton;
