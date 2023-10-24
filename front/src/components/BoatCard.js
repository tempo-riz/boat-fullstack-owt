import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import BoatImg from '../assets/boat.jpg';
import EditIcon from '@mui/icons-material/Edit';


export default function BoatCard({ boat, handleEditOpen }) {
    return (
        <Card sx={{ margin: 5, maxWidth: 400 ,overflow:'hidden',textOverflow:'ellipsis',wordWrap:'break-word'}}>
            <CardMedia
                component="img"
                alt="boat"
                height="200"
                image={BoatImg}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {boat.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {boat.description}

                </Typography>
            </CardContent>
            <CardActions sx={{padding:1.5}}>
                <Button size="small" variant="contained" startIcon={<EditIcon />} onClick={handleEditOpen}>
                    Edit
                </Button>
            </CardActions>
        </Card>
    )
}