import React from 'react';
import Typography from "@mui/material/Typography";
import photo from "../assets/profilephoto.jpeg";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function Home() {
    return (
        <Box sx={{margin: '2%'}}>
            <h1> Work Experience </h1>
            <Card sx={{ minWidth: 345, mb: 2}}>
                <CardContent>
                    <h4>
                        Pearson
                    </h4>
                    <li>
                        Developed an email monitoring application to log and track critical server information, enabling timely resolution of server problems and preventing potential downtime in Python
                    </li>
                    <li>
                        Conducted thorough code reviews in Python for team members with limited programming experience
                    </li>
                    <li>
                        Performed tasks in SolarWinds such as enabling/disabling user access and pushing updates to running scripts
                    </li>
                </CardContent>
            </Card>
            <Card sx={{ minWidth: 345,mb: 2}}>
                <CardContent>
                    <h4>
                        Siemens
                    </h4>
                    <li>
                        Engineered back and front-end features in Visual Basic .NET for an application to generate auto parts
                    </li>
                    <li>
                        Designed a new front-end theme for a suite of applications, achieving a consistent and cohesive user experience
                    </li>
                    <li>
                        Improved 3D model generation process, achieved 10x faster model
                    </li>
                </CardContent>
            </Card>
            <div/>
            <Card sx={{ minWidth: 345, mb: 2}}>
                <CardContent>
                    <h4>
                        John Deere
                    </h4>
                    <li>
                        Built a self-service cost management tool to monitor Amazon Web Service spending at the facilit
                    </li>
                    <li>
                        Utilized PHP, JavaScript, and MySQL to fit seamlessly alongside existing tools used by the infrastructure team
                    </li>
                    <li>
                        Collaborated with John Deere Security to configure IAM permissions to allow appropriate user access
                    </li>
                </CardContent>
            </Card>
        </Box>
    );
}