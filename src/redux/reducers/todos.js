const initialState = []

const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: payload.id,
          name: payload.name,
          completed: false,
        },
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo
      )
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== payload.id)
    default:
      return state
  }
}

export default todos
