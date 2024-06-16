import React, { useContext, useRef } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../../../public/Images/logoNews.png'
import loginimg from '../../../public/Images/login.png'
import { NavLink } from 'react-router-dom'
import { NewsDataContext } from '../../../NewsData/NewsData';
function Mainheader() {
    const { HandleHeader, HandleViewAllSearch } = useContext(NewsDataContext);
    const SearchValue = useRef("");
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            HandleViewAllSearch(SearchValue.current.value)
        }
    }
    return (
        <>
            <header className="py-3 mb-3 border-bottom bg-black">

                <div className="container-fluid d-grid gap-3 align-items-center" style={{ gridTemplateColumns: "1fr 2fr" }}>
                    <div className="dropdown flex_close">
                        <div className="open_icon" onClick={() => HandleHeader(true)}><GiHamburgerMenu /></div>
                        <NavLink to="/Home" className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 text-decoration-none text-white fs-3 bg-transparent" aria-expanded="false"><img src={logo} className='rounded-2 shadow-lg' width="80px" alt="" />
                        </NavLink>
                    </div>

                    <div className="d-flex align-items-center">
                        <form className="w-100 me-3" role="search">
                            <input type="search" ref={SearchValue} className="form-control" placeholder="Search..." aria-label="Search" onKeyDown={handleKeyPress} />
                        </form>

                        <div className="flex-shrink-0 dropdown">
                            <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={loginimg} alt="NewsPro" width="32" height="32" className="rounded-circle" />
                            </a>

                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Mainheader
