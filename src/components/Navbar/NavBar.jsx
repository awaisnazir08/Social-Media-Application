import React from "react";
import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="navBar">
            <div className="left">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <span >
                        Bhaalu's Social
                    </span>
                </Link>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon />
                <AppsOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsOutlinedIcon/>
                <div className="user">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/Eurasian_wolf_2.jpg" alt="Wolf"/>

                    <span>Awais Nazir</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar