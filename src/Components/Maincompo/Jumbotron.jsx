import React from 'react'

function Jumbotron() {
    return (
        <>
            <div className="container my-5 jumbotron rounded-5">
                <div className="p-5 text-center  rounded-5 ">
                    <svg className="bi mt-4 mb-3" style={{ color: "var(--bs-indigo)", width: "100", height: "100" }}><use xlinkHref="#bootstrap"></use></svg>
                    <h1 className="text-body-emphasis"> "Breaking News: Major Political Scandal Uncovered"</h1>
                    <p className="col-lg-8 mx-auto fs-5 text-muted">
                        Our news website brings you the latest updates on a significant political scandal that has just been uncovered. Stay informed as we provide in-depth coverage, analysis, and reactions from key figures involved in the scandal. We aim to keep you up-to-date on the evolving developments as they unfold, ensuring you have access to accurate and timely information.
                    </p>

                </div>
            </div>
        </>
    )
}

export default Jumbotron
