import { useState } from 'react';

export default function AddPost(props) {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [marketShare, setMarketShare] = useState('');
    const [renewableEnergyPercentage, setRenewableEnergyPercentage] = useState('');
    const [yearlyRevenue, setYearlyRevenue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProvider = {
            name,
            country,
            market_share: parseFloat(marketShare),
            renewable_energy_percentage: parseFloat(renewableEnergyPercentage),
            yearly_revenue: parseFloat(yearlyRevenue),
        };
        props.addPost(newProvider);
        setName('');
        setCountry('');
        setMarketShare('');
        setRenewableEnergyPercentage('');
        setYearlyRevenue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add new Provider</h2>
            <div className="input-container">
                <label htmlFor="name">Name</label>
                <input
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="input-container">
                <label htmlFor="country">Country</label>
                <input
                    name="country"
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
            </div>
            <div className="input-container">
                <label htmlFor="market_share">Market Share</label>
                <input
                    name="market_share"
                    type="number"
                    value={marketShare}
                    onChange={(e) => setMarketShare(e.target.value)}
                />
            </div>
            <div className="input-container">
                <label htmlFor="renewable_energy_percentage">Renewable Energy %</label>
                <input
                    name="renewable_energy_percentage"
                    type="number"
                    value={renewableEnergyPercentage}
                    onChange={(e) => setRenewableEnergyPercentage(e.target.value)}
                />
            </div>
            <div className="input-container">
                <label htmlFor="yearly_revenue">Yearly Revenue</label>
                <input
                    name="yearly_revenue"
                    type="number"
                    value={yearlyRevenue}
                    onChange={(e) => setYearlyRevenue(e.target.value)}
                />
            </div>
            <button type="submit" className="btn-submit">Add Provider</button>
        </form>
    );
}
