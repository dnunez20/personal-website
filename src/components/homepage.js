import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";


import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';

import React from "react";

const drawerWidth = 240;

export default function MuiToolbar() {
    return (
        <Box sx={{flexGrow: 1, display: 'flex'}}>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div" align="center">
                        Welcome
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export function Sidebar() {
    return (
        <Box>
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Permanent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
            </Drawer>
        </Box>

    );
}

