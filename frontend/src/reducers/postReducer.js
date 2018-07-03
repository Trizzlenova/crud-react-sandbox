const defaultState = [
  {
    id: 0,
    title: 'Insane!',
    city: 'Paris',
    body: 'This is the craziest city in the world. Old Faithful.',
    user: 'UserName 0',
  },
]

function posts (state = defaultState, action) {
  switch (action.type) {
    case 'ADD_POST':
      return [ ...state, action.post ]

    case 'TOGGLE_POST':
      const newState = state.map(post => {
        if (post.id === action.id) {
          post.completed = !post.completed
        }
        return post
      })
      return newState

    case 'DELETE_POST':
      return state.filter(post => post.id !== action.id)

    case 'UPDATE_POST':
      return state.map(post => {
        if(post.id === action.id){
          post.title = action.update
        }
        return post
      })

    default:
      return state
  }
}

export default posts
