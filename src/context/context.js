import { useContext, useReducer, useEffect, createContext } from 'react'
import reducer from './reducer'
import useFetch from '../custom-hooks/use-fetch'

// base url to fetch breweries
const url = `https://api.openbrewerydb.org/breweries/search?query=`

// app context
const AppContext = createContext()

// initial state
const initialState = {
  loading: true,
  searchTerm: '',
  breweries: [],
}

// app provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value="starter value!!!!!!!!!!!!!!!!!!!!">
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider, useGlobalContext }
