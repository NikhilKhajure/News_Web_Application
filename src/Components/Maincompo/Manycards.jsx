import React, { useContext } from 'react'
import Maincardsheading from './Maincardsheading';
import { NewsDataContext } from '../../../NewsData/NewsData'
import LoadingSpinner from '../LoadingSpinner';
function Manycards() {
    const { newsContent } = useContext(NewsDataContext);
    return (
        <>
            <Maincardsheading title="Top News" />
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                {(!newsContent || newsContent.length === 0) ? <LoadingSpinner /> : newsContent.slice(61, 64).map((value) => {
                    return <div key={value.id} className="col">
                        <a href={value.url} target='_blank' className=' text-decoration-none'>
                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg bgimag" style={{ backgroundImage: `URL(${value.urlToImage})` }} >
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1"> {value.title} </h3>

                                </div>
                            </div>
                        </a>
                    </div>
                })}
            </div>
        </>
    )
}

export default Manycards
