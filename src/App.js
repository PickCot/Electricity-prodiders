import React, { useEffect, useState } from 'react';
import Table from "./components/Table";
import AddProvider from "./components/AddProvider";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import EditProvider from './components/EditProvider';
import AddProviderButton from "./components/AddProviderButton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/styles.css'

const App = () => {
    const [providers, setProviders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [reload, setReload] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/providers');
            const data = await response.json();
            const transformedData = data.map((provider) => ({
                ...provider,
                id: provider._id,
            }));
            setProviders(transformedData);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error('Error fetching data');
        }
    };

    useEffect(() => {
        fetchData();
    }, [reload]);

    const addPost = async (newProvider) => {
        try {
            const response = await fetch('http://localhost:4000/providers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProvider),
            });
            if (!response.ok) {
                throw new Error('Failed to create provider');
            }
            const result = await response.json();
            console.log('Provider added:', result);
            setReload(!reload); // Toggle reload state to re-fetch data
            toast.success('Provider added successfully');
        } catch (error) {
            console.error('Error adding provider:', error);
            toast.error('Error adding provider');
        }
    };

    const deletePost = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/providers/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete provider');
            }

            setProviders((prevProviders) =>
                prevProviders.filter((provider) => provider._id !== id)
            );
            toast.success('Provider deleted successfully');
        } catch (error) {
            console.error('Error deleting provider:', error);
            toast.error('Error deleting provider');
        }
    };

    const updatePost = async (updatedPost) => {
        try {
            const response = await fetch(`http://localhost:4000/providers/${updatedPost._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPost),
            });

            if (!response.ok) {
                throw new Error(`Failed to update provider: ${response.status} - ${response.statusText}`);
            }

            return response.json(); // Вернуть ответ в формате JSON

        } catch (error) {
            console.error('Error updating provider:', error.message);
            toast.error('Error updating provider');
            throw error; // Пробросить ошибку для обработки в компоненте DataTable
        }
    };

    return (
        <Router>
            <div className="app-container">
                <h1>Electricity Providers</h1>
                <Routes>
                    <Route
                        path="/"
                        element={
                            !isLoading ? (
                                <>
                                    <AddProviderButton/>
                                    <Table rows={providers} deletePost={deletePost} updatePost={updatePost} />
                                </>
                            ) : (
                                <p>Loading...</p>
                            )
                        }
                    />
                    <Route path="/add" element={<AddProvider addPost={addPost} />} />
                    <Route path="/edit/:id" element={<EditProvider updatePost={updatePost} setReload={setReload} reload={reload} />} />
                </Routes>
                <ToastContainer />
            </div>
        </Router>
    );
};

export default App;
