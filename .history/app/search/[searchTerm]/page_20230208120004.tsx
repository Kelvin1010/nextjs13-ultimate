import { type } from 'os';
import React from 'react';

type PageProps = {
    params: {
        searchTerm: string
    }
}

type SearchResult = {
    organic_results: [
        {
            position: number,
            title: string,
            link: string,
            thumbnail: string,
            snippet: string
        }
    ]
}

const search = async (searchTerm: string) => {
    const res = await fetch(
        `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_Key}`
    )

    const data: SearchResult = await res.json();
    return data
}

async function SearchResults({params: {searchTerm}}: PageProps) {

    const searchResults = await search(searchTerm)

    return (
        <div>
            <p className='text-gray-500'>

            </p>
        </div>
    )
}

export default SearchResults