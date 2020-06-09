const initialState = {
  cachedDogs: [],
  loading: false,
  error: null,
}

const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_DOG_START':
      return {
        ...state,
        loading: true,
        error: null,
      }
    case 'GET_DOG_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Failed to get dog pic!',
      }
    case 'GET_DOG_SUCCESS':
      return {
        ...state,
        cachedDogs: [...state.cachedDogs, payload],
        loading: false,
      }
    default:
      return state
  }
}

export default todos
