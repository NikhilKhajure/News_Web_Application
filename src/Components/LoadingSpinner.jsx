import React from 'react'

function LoadingSpinner() {
    return (
        <>
            <div style={{ display: "flex", margin: "auto" }}>
                <div className="spinner-border m-auto" style={{ width: "4rem; height: 4rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

        </>
    )
}

export default LoadingSpinner
