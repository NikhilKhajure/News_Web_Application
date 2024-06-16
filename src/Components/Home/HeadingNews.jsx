import React, { useContext } from 'react'
import { NewsDataContext } from '../../../NewsData/NewsData'
import { NavLink, Link } from 'react-router-dom';
function HeadingNews({ heading }) {
    const { HandleViewAllSearch } = useContext(NewsDataContext);
    return (
        <>
            <div className="heading">
                <h4>{heading}</h4>
                <button onClick={() => HandleViewAllSearch(heading)}><Link to="/allnews" className='view_all'>View All</Link></button>

            </div>
        </>
    )
}

export default HeadingNews
