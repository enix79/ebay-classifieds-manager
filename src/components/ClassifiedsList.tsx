import React, { FC } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ClassifiedSummary } from '../types';
import { Container, Typography } from '@mui/material';

export interface ClassifiedsListProps {
    rows: Array<ClassifiedSummary>;
}

const ClassifiedsList: FC<ClassifiedsListProps> = ({ rows }) => {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'title',
            headerName: 'Titel',
            flex: 1,
        },
        {
            field: 'price',
            headerName: 'Preis',
            width: 70,
        },
        {
            field: 'creationDate',
            headerName: 'Erstellt am',
            width: 100,
        },
        {
            field: 'onlineSince',
            headerName: 'Online seit',
            width: 100,
        },
        {
            field: 'duration',
            headerName: 'Laufzeit',
            width: 100,
        },
    ];
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Liste der Kleinanzeigen
            </Typography>
            <DataGrid rows={rows} columns={columns} autoHeight />
        </Container>
    );
};

export default ClassifiedsList;
