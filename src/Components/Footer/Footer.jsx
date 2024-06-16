import React, { useContext } from 'react'
import Maincardsheading from '../Maincompo/Maincardsheading'
import { NavLink, Link } from 'react-router-dom'
import { NewsDataContext } from "../../../NewsData/NewsData"
function Footer() {
    const HandleGetValue = (event) => {
        HandleViewAllSearch(event.target.innerHTML);
    }
    const { HandleViewAllSearch } = useContext(NewsDataContext);
    return (
        <>
            <Maincardsheading title="Explore Our Latest News" />
            <div className="container px-4 py-2">
                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                    <div className="col d-flex flex-column align-items-start gap-2">
                        <h2 className="fw-bold text-body-emphasis">
                            "Discover the Power of Now: Your Ultimate News Destination!" !!!!</h2>
                        <p className="text-body-secondary">Stay ahead with the latest updates! Our news website is your go-to source for breaking stories, insightful analyses, and trending topics. With a commitment to delivering accurate and timely information, we bring you the pulse of the world at your fingertips.</p>
                        <button id="btn" > <NavLink to="/allnews" className=' text-decoration-none text-bg-dark'>Read More</NavLink> </button>
                    </div>

                    <div className="col">
                        <div className="row row-cols-1 row-cols-sm-2 g-4">
                            <div className="col d-flex flex-column gap-2">
                                <div className="dropup-center dropup">
                                    <button className="dropdown-toggle" type="button" id='btn' data-bs-toggle="dropdown" aria-expanded="false">
                                        Science
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li onClick={HandleGetValue}><Link to="/allnews" className="dropdown-item" >Physical Sciences  </Link></li>
                                        <li onClick={HandleGetValue}><Link to="/allnews" className="dropdown-item" >Life Sciences</Link></li>
                                        <li onClick={HandleGetValue}><Link to="/allnews" className="dropdown-item" >Earth Sciences</Link></li>
                                    </ul>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">Trending Science News</h4>
                                <p className="text-body-secondary">Explore the trending science news from all over the world</p>
                            </div>

                            <div className="col d-flex flex-column gap-2 ">
                                <div className="dropup-center dropup">
                                    <button className="dropdown-toggle" type="button" id='btn' data-bs-toggle="dropdown" aria-expanded="false">
                                        Education
                                    </button>
                                    <ul className="dropdown-menu  ">
                                        <li onClick={HandleGetValue}><Link to="/allnews" className="dropdown-item" >Biology</Link></li>
                                        <li onClick={HandleGetValue}><Link to="/allnews" className="dropdown-item" >Chemistry</Link></li>
                                        <li onClick={HandleGetValue}><Link to="/allnews" className="dropdown-item" >Physics</Link></li>
                                    </ul>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">Trending Education News</h4>
                                <p className="text-body-secondary">Explore the trending ducation news from all over the world</p>
                            </div>

                            <div className="col d-flex flex-column gap-2">
                                <div className="dropup-center dropup">
                                    <button className="dropdown-toggle" type="button" id='btn' data-bs-toggle="dropdown" aria-expanded="false">
                                        Sport
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li onClick={HandleGetValue}><Link to="/allnews" className="dropdown-item" >Cricket</Link></li>
                                        <li onClick={HandleGetValue}><Link to="/allnews" className="dropdown-item" >Football</Link></li>
                                        <li onClick={HandleGetValue}><Link to="/allnews" className="dropdown-item" >Esport</Link></li>
                                    </ul>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">Trending Sports News</h4>
                                <p className="text-body-secondary">Explore the trending sport news from all over the world</p>
                            </div>

                            <div className="col d-flex flex-column gap-2">
                                <div className="dropup-center dropup">
                                    <button className="dropdown-toggle" type="button" id='btn' data-bs-toggle="dropdown" aria-expanded="false">
                                        County
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li onClick={HandleGetValue}><Link to="/allnews" className="dropdown-item" >India</Link></li>
                                        <li onClick={HandleGetValue}><Link to="/allnews" className="dropdown-item" >China</Link></li>
                                        <li onClick={HandleGetValue}><Link to="/allnews" className="dropdown-item" >Australia</Link></li>
                                    </ul>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">Trending Country News</h4>
                                <p className="text-body-secondary">Explore the trending  news from all over the world</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
