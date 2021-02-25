import {
  useContext,
  useReducer,
  useEffect,
  createContext,
  useCallback,
} from 'react'
import reducer from './reducer'

// app context
const AppContext = createContext()

// initial state
const initialState = {
  loading: false,
  searchTerm: 'southern',
  breweries: [],
}

// base url to fetch breweries
const url = `https://api.openbrewerydb.org/breweries/search?query=${initialState.searchTerm}`

// app provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // fetch  initial list of breweries
  const fetchBreweries = useCallback(async () => {
    dispatch({ type: 'LOADING' })

    try {
      const response = await fetch(url)
      const data = await response.json()
      dispatch({ type: 'INITIAL_SEARCH', payload: data })
    } catch (error) {
      console.log(error)
    }
  }, [state.searchTerm])

  useEffect(() => {
    return fetchBreweries()
  }, [state.searchTerm, fetchBreweries])

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider, useGlobalContext }
