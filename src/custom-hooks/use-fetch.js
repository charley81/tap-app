import { useState, useEffect, useCallback } from 'react'

const useFetch = ({ url, searchBy }) => {
  const fetchBreweries = useCallback(async () => {
    try {
      const response = await fetch(`${url}${searchBy}`)
      const data = await response.json()
      dispatch({ type: 'INITIAL_SEARCH', payload: data })
    } catch (error) {
      console.error(error)
    }
  }, [searchBy, url])

  useEffect(() => {
    return fetchBreweries()
  }, [searchBy, fetchBreweries])

  return { loading, breweries }
}
m ,kji?"














"
export default useFetch
