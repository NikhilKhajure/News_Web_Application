import React, { useContext } from 'react'
import './Trending.css';
import Maincardsheading from '../Maincompo/Maincardsheading';
import { NewsDataContext } from '../../../NewsData/NewsData'
import LoadingSpinner from '../LoadingSpinner';
function Treanding() {
    const { newsContent } = useContext(NewsDataContext);
    return (
        <>
            <div className="Trending_news">
                <Maincardsheading title="Trending News" />
                {(!newsContent || newsContent.length === 0) ? <LoadingSpinner /> : newsContent.slice(85, 100).map((value) => {
                    return <a href={value.url} target='_blank' className=' text-decoration-none text-black'>
                        <div className="treandin_card">
                            <div className="image"><img src={value.urlToImage} alt="loading..." /></div>
                            <div className="info">
                                <h4 className=' text-success'>{value.title}</h4>
                                <h5>{value.description}</h5>
                            </div>
                        </div>
                    </a>
                })}
            </div>

        </>
    )
}

export default Treanding
