import React, { useEffect, useState } from 'react';
import Table from "./components/Table";
import AddPost from "./components/AddPost";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import EditProvider from './components/EditProvider';
import AddProviderButton from "./components/AddProviderButton";

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
        } catch (error) {
            console.error('Error adding provider:', error);
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
        } catch (error) {
            console.error('Error deleting provider:', error);
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
            throw error; // Пробросить ошибку для обработки в компоненте DataTable
        }
    };

    return (
        <Router>
            <div>
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
                    <Route path="/add" element={<AddPost addPost={addPost} />} />
                    <Route path="/edit/:id" element={<EditProvider updatePost={updatePost} setReload={setReload} reload={reload} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
