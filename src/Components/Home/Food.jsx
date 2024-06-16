import React, { useContext } from 'react'
import HeadingNews from './HeadingNews'
import Maincard from './Maincard'
import { NewsDataContext } from "../../../NewsData/NewsData"
import LoadingSpinner from '../LoadingSpinner';
function Food() {
    const { newsContent } = useContext(NewsDataContext);
    return (
        <>
            <HeadingNews heading="Food" />
            {(!newsContent || newsContent.length === 0) ? <LoadingSpinner /> : <Maincard newsContent={newsContent.slice(10, 13)} />}

        </>
    )
}

export default Food
