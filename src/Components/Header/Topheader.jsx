import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoCloseCircleOutline } from "react-icons/io5";
import "./Header.css";
import { NewsDataContext } from '../../../NewsData/NewsData';
function Topheader() {
    const navItems = ["Home",
        "WORL_EDITION",
        "PROFIT",
        "हिंदी",
        "CRICKET",
        "MOVIES",
        "FOOD",
        "LIFESTYLE",
        "HEALTH",
        "SWASTH",
        "TECH",
        "INFLUENCERS",
        "GAMES",
        "BIG_BONUS",
        "SHOPPING"]
    const { handleHeaderCss, HandleHeader, HandleViewAllSearch } = useContext(NewsDataContext);
    return (
        <>
            <div className="topheader" style={{ left: handleHeaderCss == true ? "0%" : "-104%" }}>
                <div className="navList">
                    <div className="header_icons"><h3 className='logo'>NewsPro</h3><h3 className='close_icon' onClick={() => HandleHeader(false)}><IoCloseCircleOutline /></h3></div>
                    <div className="line"></div>
                    {navItems.map((value, index) => {
                        return <NavLink key={index} to={value} onClick={() => HandleViewAllSearch(value)}> {value} </NavLink>
                    })}
                </div>
            </div>
        </>
    )
}

export default Topheader
