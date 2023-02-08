"use client";

import React, { useEffect } from 'react'

function Error({error, reset}: {error: Error; reset: () => void}) {

    useEffect(() => {
        console.log(error)
    })

    return (
        <div>
            Something make you broke 
        </div>
    )
}

export default Error