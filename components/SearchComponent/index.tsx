import { useState } from 'react'
import { getSearchIndex } from 'next-drupal'
import s from './SearchComponent.module.scss'

export default function SearchComponent() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const handleFormSubmit = async event => {
    event.preventDefault()

    const index = await getSearchIndex('articles')
    const searchResults = await index.search(query)

    console.log(searchResults)

    setResults(searchResults.hits)
  }

  return (
    <div className={s.serchContent}>
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
  )
}