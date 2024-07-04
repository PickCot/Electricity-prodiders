import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DataTable({ rows, deletePost, updatePost }) {
    const navigate = useNavigate();

    const columns = [
        { field: 'id', headerName: 'ID', width: 70, editable: false },
        { field: 'name', headerName: 'Name', width: 130, editable: false },
        { field: 'country', headerName: 'Country', width: 130, editable: false },
        { field: 'market_share', headerName: 'Market Share', type: 'number', width: 120, editable: false },
        { field: 'renewable_energy_percentage', headerName: 'Renewable Energy %', type: 'number', width: 160, editable: false },
        { field: 'yearly_revenue', headerName: 'Yearly Revenue', type: 'number', width: 150, editable: false },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <div>
                    <button onClick={() => navigate(`/edit/${params.row.id}`)}>Edit</button>
                    <button onClick={() => deletePost(params.row.id)}>Delete</button>
                </div>
            ),
        },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                // checkboxSelection
                getRowId={(row) => row.id}
            />
        </div>
    );
}
