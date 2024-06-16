import React, { useContext } from 'react'
import HeadingNews from './HeadingNews'
import Maincard from './Maincard'
import { NewsDataContext } from "../../../NewsData/NewsData"
import LoadingSpinner from '../LoadingSpinner';
function Latest() {
    const { newsContent } = useContext(NewsDataContext);
    return (
        <>
            <HeadingNews heading="Latest" />
            {(!newsContent || newsContent.length === 0) ? <LoadingSpinner /> : <Maincard newsContent={newsContent.slice(0, 3)} />}


        </>
    )
}

export default Latest
