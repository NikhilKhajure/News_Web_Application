import React from 'react'
import Mainheader from './Mainheader'
import Topheader from './Topheader'
import './Header.css'
function Header() {
    return (
        <>
            <div className=" top-0 sticky-top">
                <Topheader />
                <Mainheader />
            </div>
        </>
    )
}

export default Header
