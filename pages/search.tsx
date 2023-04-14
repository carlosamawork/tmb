import fs from 'fs';
import { drupal } from 'lib/drupal';
import { useState } from 'react';

export default function Search() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    const handleInputChange = event => {
        setQuery(event.target.value)
    }

    const handleFormSubmit = async event => {
        event.preventDefault()

        const index = await drupal.getSearchIndex('search')

        console.log(index)

       
    }
    return (
        <>
            <main>
                <div className='searchContent'>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="search">Buscar:</label>
                        <input type="text" id="search" value={query} onChange={handleInputChange} />
                        <button type="submit">Buscar</button>
                    </form>

                    {results.length > 0 && (
                        <ul>
                        {results.map(result => (
                            <li key={result.id}>
                            <a href={result.url}>{result.title}</a>
                            <p>{result.summary}</p>
                            </li>
                        ))}
                        </ul>
                    )}
                </div>
            </main>
        </>
    );
}