"use client"

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

function Search() {

    const [search,setSearch] = useState("");
    const router = useRouter();

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        router.push(`/search/${search}`)
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type={'text'}
                    value={search}
                    placeholder="Search here..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button 
                    type='submit' 
                    className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg'
                >
                    Search 
                </button>
            </form>
        </div>
    )
}

export default Search