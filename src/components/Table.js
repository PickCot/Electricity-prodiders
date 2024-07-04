import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DataTable({ rows, deletePost, updatePost }) {
    const navigate = useNavigate();

    const columns = [
        { field: 'id', headerName: 'ID', width: 205, editable: false },
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
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <EditIcon onClick={() => navigate(`/edit/${params.row.id}`)} style={{ cursor: 'pointer' }} />
                    <DeleteIcon onClick={() => deletePost(params.row.id)} style={{ cursor: 'pointer' }} />
                </div>
            ),
        },
    ];

    return (
        <div style={{ height: 400, width: '100%'}}>
            <DataGrid
                //
                rows={rows}
                columns={columns}
                pageSize={5}
                getRowId={(row) => row.id}
            />
        </div>
    );
}
