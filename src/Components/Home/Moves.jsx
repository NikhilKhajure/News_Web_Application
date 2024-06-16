import React, { useContext } from 'react'
import HeadingNews from './HeadingNews'
import Maincard from './Maincard'
import { NewsDataContext } from "../../../NewsData/NewsData"
import LoadingSpinner from '../LoadingSpinner';
function Moves() {
    const { newsContent } = useContext(NewsDataContext);
    return (
        <>
            <HeadingNews heading="Moves" />
            {(!newsContent || newsContent.length === 0) ? <LoadingSpinner /> : <Maincard newsContent={newsContent.slice(50, 53)} />}
        </>
    )
}

export default Moves
