"use client";

import React, { useEffect } from 'react'
import { CLIENT_RENEG_LIMIT } from 'tls';

function Error({error, reset}: {error: Error; reset: () => void}) {

    useEffect(() => {
        CLIENT_RENEG_LIMIT
    })

    return (
        <div>
            Something make you broke 
        </div>
    )
}

export default Error