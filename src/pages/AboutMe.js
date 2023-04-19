import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Card from '@mui/material/Card';

export default function AboutMe() {
    return (
        <Box sx={{margin: '2%'}}>
            <Card sx={{ minWidth: 345, mb: 2}}>
                <CardContent>
                    <Typography>
                        I'm a Software Engineer from the University of Iowa
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}