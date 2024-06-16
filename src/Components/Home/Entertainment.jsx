import React, { useContext } from 'react'
import HeadingNews from './HeadingNews'
import Maincard from './Maincard'
import { NewsDataContext } from "../../../NewsData/NewsData"
import LoadingSpinner from '../LoadingSpinner';
function Entertainment() {
    const { newsContent } = useContext(NewsDataContext);
    return (
        <>
            <HeadingNews heading="Entertainment" />
            {(!newsContent || newsContent.length === 0) ? <LoadingSpinner /> : <Maincard newsContent={newsContent.slice(7, 10)} />}
        </>
    )
}

export default Entertainment
