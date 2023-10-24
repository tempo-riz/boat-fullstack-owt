import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import lostBoat from '../assets/lost-boat.jpg'

export default function NoBoat() {
    return (
        <Card sx={{ margin: 5, maxWidth: 400 }}>
            <CardMedia
                component="img"
                alt="boat"
                height="200"
                image={lostBoat}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    No boat found :(
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    First add a boat !
                </Typography>

            </CardContent>
        </Card>
    )
}