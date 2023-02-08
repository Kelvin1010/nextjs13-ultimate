import { type } from 'os';
import React from 'react';

type PageProps = {
    params: {
        searchTerm: string
    }
}

type SearchResult = {
    organi
}

const search = async (searchTerm: string) => {
    const res = await fetch(
        `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_Key}`
    )
}

async function SearchResults({params: {searchTerm}}: PageProps) {

    const searchResults = await search(searchTerm)

    return (
        <div>SearchResults</div>
    )
}

export default SearchResults