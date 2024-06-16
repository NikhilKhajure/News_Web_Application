import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Home.css'
function Homebanner() {
    return (
        <>
            <div className="banner z-0">
                <section className="py-5 text-center container z-3">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light text-body-primary">Explore News</h1>
                            <p className="lead text-body-white fs-4">Stay ahead with the latest updates! Our news website is your go-to source for breaking stories, insightful analyses, and trending topics.</p>
                            <p>
                                <button id="btn" > <NavLink to="/allnews" className=' text-decoration-none bg-transparent text-white border-white'>Explore</NavLink> </button>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Homebanner
