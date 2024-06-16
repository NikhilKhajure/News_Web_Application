import React from 'react'

import "./MainComp.css";
import Maincompcard from './Maincompcard';
import Jumbotron from './Jumbotron';
import Manycards from './Manycards';
import Treanding from '../Trending/Treanding';
function MainNewsComp() {

    return (
        <>
            <div className="maincomp">
                <Jumbotron />
                <Manycards />
                <Maincompcard />
                <Treanding />
            </div>
        </>
    )
}

export default MainNewsComp
