import { useState, useEffect, useCallback } from 'react'

const useFetch = url => {
  const [loading, setLoading] = useState(true)
  const [breweries, setBreweries] = useState([])

  const getProducts = useCallback(async () => {
    const response = await fetch(url)
    const data = await response.json()
    setBreweries(data)
    setLoading(false)
  }, [url])

  useEffect(() => {
    getProducts()
  }, [url, getProducts])

  return { loading, breweries }
}

export default useFetch
