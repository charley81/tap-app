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
  brewery: '',
}

// base url to fetch breweries
const url = `https://api.openbrewerydb.org/breweries/search?query=`

// app provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // dispatches
  const loadingDispatch = () => dispatch({ type: 'LOADING' })
  const getBrewery = brewery =>
    dispatch({ type: 'SINGLE_BREWERY', payload: brewery })
  const setSearchTerm = word => dispatch({ type: 'SET_SEARCH', payload: word })

  // fetch  initial list of breweries
  const fetchBreweries = useCallback(async () => {
    loadingDispatch()

    try {
      const response = await fetch(`${url}${state.searchTerm}`)
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
    <AppContext.Provider
      value={{ ...state, loadingDispatch, getBrewery, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider, useGlobalContext }
