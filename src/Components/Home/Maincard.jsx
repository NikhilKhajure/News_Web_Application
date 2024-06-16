import React, { useContext } from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import LoadingSpinner from '../LoadingSpinner';
function Maincard({ newsContent }) {
    return (
        <>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {(!newsContent || newsContent.length === 0) ? <LoadingSpinner /> :
                            newsContent.map((value, index) => {
                                return <div key={index} className="col">
                                    <div className="card shadow-sm">
                                        <img src={value.urlToImage} style={{ height: "250px" }} alt="..." />
                                        <div className="card-body">
                                            <h4 className='overflow-auto' style={{ height: "10vh" }}> {value.title} </h4>
                                            <p className="card-text overflow-auto" style={{ height: "10vh" }}>{value.description}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href={value.url} target='_blank'><button id="btn">Read More <FaArrowUpRightFromSquare /> </button></a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>


        </>
    )
}

export default Maincard
