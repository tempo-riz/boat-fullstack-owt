import React from 'react';
import { ListItemButton, ListItemText, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


export default function BoatItem({ boat, selected, handleClick, handleDelete }) {
    return (
        <Paper elevation={3} sx={{ padding: 0, margin: 2 ,overflow:'hidden',textOverflow:'ellipsis'}}>
            <ListItemButton selected={selected} key={boat.id} onClick={handleClick}>
                <ListItemText primary={boat.name} secondary={boat.description} />
                <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </ListItemButton>
        </Paper>
    )
}