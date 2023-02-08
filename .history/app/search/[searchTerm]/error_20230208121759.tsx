"use client";

import React, { useEffect } from 'react'

function Error({error, reset}: {error: Error; reset: () => void}) {

    useEffect(() => {
        console.log(error)
    },[error])

    return (
        <div>
            <p>Something make you wrong...</p>
            <button onClick={()=>reset()}>Reset error</button>
        </div>
    )
}

export default Error