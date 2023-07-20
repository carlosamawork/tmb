import { Body } from 'components/Body';
import fs from 'fs';
import { drupal } from 'lib/drupal';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Search() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const router = useRouter()

    const handleInputChange = event => {
        setQuery(event.target.value)
    }

    const handleFormSubmit = async event => {
        event.preventDefault()

        const index = await drupal.getSearchIndex('search',
        {params: {
                filter: { 
                    title: query,

                },
            },
            locale: router.locale,
            defaultLocale: router.defaultLocale,
        })
        

        setResults(index)

       
    }
    return (
        <>
            <main>
                <div className='searchContent'>
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" id="search" value={query} onChange={handleInputChange} />
                        <button type="submit">Buscar</button>
                    </form>
                    {results.length > 0 && (
                        <ul className="search-list">
                        {results.map(result => (
                            <li key={result.id}>
                                <a href={result.url}>
                                    <h3>{result.title}</h3>
                                    {result.body ? 
                                        <div className={'body'}>
                                            <Body value={result.body.processed} />
                                        </div> :
                                        undefined
                                    }  
                                </a>
                            </li>
                        ))}
                        </ul>
                    )}
                    {results.length == 0 && (
                        <h1>No results</h1>
                    )}
                </div>
            </main>
        </>
    );
}