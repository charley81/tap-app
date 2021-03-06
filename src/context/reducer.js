const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_DATA': {
      return {
        ...state,
      }
    }
    case 'INITIAL_SEARCH':
      return {
        ...state,
        breweries: action.payload,
        loading: false,
      }
    case 'SINGLE_BREWERY':
      return {
        ...state,
        brewery: action.payload,
        loading: false,
      }
    case 'SET_SEARCH':
      return {
        ...state,
        searchTerm: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default reducer
