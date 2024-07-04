import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import { toast } from 'react-toastify';

const AddProvider = ({ addPost }) => {
    const navigate = useNavigate();
    const [newProvider, setNewProvider] = useState({
        name: '',
        country: '',
        market_share: '',
        renewable_energy_percentage: '',
        yearly_revenue: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProvider((prevProvider) => ({
            ...prevProvider,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newProvider.market_share > 100 || newProvider.renewable_energy_percentage > 100) {
            toast.error('Market Share and Renewable Energy Percentage cannot exceed 100%');
            return;
        }

        await addPost(newProvider);
        navigate('/'); // Navigate back to the main page or another desired route
    };

    return (
        <div className="form-container">
            <h2>Add New Provider</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={newProvider.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Country:</label>
                    <input type="text" name="country" value={newProvider.country} onChange={handleChange} />
                </div>
                <div>
                    <label>Market Share:</label>
                    <input type="number" name="market_share" value={newProvider.market_share} onChange={handleChange} />
                </div>
                <div>
                    <label>Renewable Energy %:</label>
                    <input type="number" name="renewable_energy_percentage" value={newProvider.renewable_energy_percentage} onChange={handleChange} />
                </div>
                <div>
                    <label>Yearly Revenue:</label>
                    <input type="number" name="yearly_revenue" value={newProvider.yearly_revenue} onChange={handleChange} />
                </div>
                <button type="submit">Add Provider</button>
            </form>
        </div>
    );
};

export default AddProvider;
