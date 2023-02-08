"use client";

import React from 'react'

function Error({error, reset}: {error: Error; reset: () => void})) {
    return (
        <div>
            Something make you broke 
        </div>
    )
}

export default Error