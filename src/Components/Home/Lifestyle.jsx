import React, { useContext } from 'react'
import HeadingNews from './HeadingNews'
import Maincard from './Maincard'
import { NewsDataContext } from "../../../NewsData/NewsData"
import LoadingSpinner from '../LoadingSpinner';
function Lifestyle() {
    const { newsContent } = useContext(NewsDataContext);
    return (
        <>
            <HeadingNews heading="Liferstyle" />
            {(!newsContent || newsContent.length === 0) ? <LoadingSpinner /> : <Maincard newsContent={newsContent.slice(34, 37)} />}

        </>
    )
}

export default Lifestyle
