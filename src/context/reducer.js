const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'INITIAL_SEARCH':
      return {
        ...state,
        breweries: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default reducer
