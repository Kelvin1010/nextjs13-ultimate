"use client";

import React, { useEffect } from 'react'

function Error({error, reset}: {error: Error; reset: () => void}) {

    useEffect(() => {
        console.log(error)
    },[error])

    return (
        <div>
            Something make you wrong...
            <button></button>
        </div>
    )
}

export default Error