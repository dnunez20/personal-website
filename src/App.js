import React from 'react';
import './App.css';
import {MUIToolbar, MuiToolbar} from '../src/components/Sidebar.js'
import MiniDrawer from "../src/components/Sidebar.js";
import Home from "./pages/Home.js"
import AboutMe from "./pages/AboutMe";
import Progression from "./pages/Progression";
import Resume from "./pages/Resume.js";
import { Routes, Route, Link } from "react-router-dom";
import Sidebar from "../src/components/Sidebar.js";
import {Box, Toolbar, Typography} from "@mui/material";


export default function App() {
    return (
        <Box sx={{display: 'flex'}}>
            <Sidebar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutMe/>} />
            </Routes>
        </Box>
    );
}

