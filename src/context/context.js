import { useContext, useReducer, useEffect, createContext } from 'react'
import reducer from './reducer'
import useFetch from '../custom-hooks/use-fetch'

// base url to fetch breweries
const url = `https://api.openbrewerydb.org/breweries/search?query=beer`

// app context
const AppContext = createContext()

// initial state
const initialState = {
  loading: false,
  searchTerm: 'beer',
  breweries: [],
}

// app provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // fetch  initial list of breweries
  const fetchBreweries = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBreweries()
  })

  return (
    <AppContext.Provider value="starter value!!!!!!!!!!!!!!!!!!!!">
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider, useGlobalContext }
