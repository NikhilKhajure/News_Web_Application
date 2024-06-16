import React, { useContext } from 'react'
import HeadingNews from './HeadingNews'
import Maincard from './Maincard'
import { NewsDataContext } from "../../../NewsData/NewsData"
import LoadingSpinner from '../LoadingSpinner';
function Cricket() {
    const { newsContent } = useContext(NewsDataContext);
    return (
        <>

            <HeadingNews heading="Cricket" />
            {(!newsContent || newsContent.length === 0) ? <LoadingSpinner /> : <Maincard newsContent={newsContent.slice(4, 7)} />}

        </>
    )
}

export default Cricket
