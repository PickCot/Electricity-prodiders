import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/styles.css';

const EditProvider = ({ updatePost, setReload, reload }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [provider, setProvider] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProvider = async () => {
            try {
                const response = await fetch(`http://localhost:4000/providers/${id}`);
                const data = await response.json();
                setProvider(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching provider:', error);
                toast.error('Error fetching provider data');
            }
        };
        fetchProvider();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProvider({ ...provider, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updatePost(provider);
            toast.success('Provider updated successfully');
            setReload(!reload); // Toggle reload state to re-fetch data
            navigate('/');
        } catch (error) {
            console.error('Error updating provider:', error);
        }
    };

    if (isLoading) {
        return <div>Loading provider data...</div>;
    }

    return (
        <div className="form-container">
            <h2>Edit Provider</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={provider.name} onChange={handleInputChange} />
                </label>
                <label>
                    Country:
                    <input type="text" name="country" value={provider.country} onChange={handleInputChange} />
                </label>
                <label>
                    Market Share:
                    <input type="number" name="market_share" value={provider.market_share} onChange={handleInputChange} />
                </label>
                <label>
                    Renewable Energy %:
                    <input type="number" name="renewable_energy_percentage" value={provider.renewable_energy_percentage} onChange={handleInputChange} />
                </label>
                <label>
                    Yearly Revenue:
                    <input type="number" name="yearly_revenue" value={provider.yearly_revenue} onChange={handleInputChange} />
                </label>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditProvider;
