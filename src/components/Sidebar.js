import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import WorkIcon from '@mui/icons-material/Work';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import photo from '../assets/profilephoto.jpeg';
import { Link } from "react-router-dom";



export function MUIToolbar() {
    return (
            <AppBar
                position="fixed"
                sx={{width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Welcome
                    </Typography>
                </Toolbar>
            </AppBar>
    );
}

const drawerWidth = 240;
const menuItems = [
    {text: "Work Experience", path: "/", icon: (<WorkIcon/>)},
    {text: "About Me", path: "/about", icon: (<InfoIcon/>)},
];


export default function Sidebar() {

    return (
            <Drawer
                sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth,
                        boxSizing: 'border-box',},}} variant="permanent" anchor="left">
                <Box sx={{ height: 120, width: 240,}} justifyContent="center" alignItems="center" display="flex">
                    <Box component="img"
                        sx={{ height: 100, width: 100, borderRadius: '50%', ml: 'auto', mr: 'auto', }} src={photo}/>
                </Box>
                <Box sx={{width: 240, ml: "auto", mr: "auto", textAlign: "center"}}>
                    <Typography>Daniel Nunez</Typography>
                    <Typography>Software Engineer</Typography>
                    <Typography>5 YOE</Typography>
                </Box>

                <Divider/>
                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton component={Link} to={item.path}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}></ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem key="Github" disablePadding>
                        <ListItemButton href="https://www.github.com/dnunez20" target="_blank">
                            <ListItemIcon><GitHubIcon/></ListItemIcon>
                            <ListItemText primary="Github"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key="LinkedIn" disablePadding>
                        <ListItemButton href="https://www.linkedin.com/in/daniel-nunez97/" target="_blank">
                            <ListItemIcon><LinkedInIcon/></ListItemIcon>
                            <ListItemText primary="LinkedIn"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>


    );
}