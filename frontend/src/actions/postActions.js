import uuid from 'uuid'

export function addPost (task) {
  return {
    type: 'ADD_POST',
    Post: {
      id: uuid(),
      completed: false
    }
  }
}
// export function addPost (task) {
//   return {
//     type: 'ADD_POST',
//     Post: {
//       id: uuid(),
//       title: title,
//       city: city,
//       body: body,
//       author: author,
//       comments: comments,
//       completed: false
//     }
//   }
// }

export function togglePost (id) {
  return {
    type: 'TOGGLE_POST',
    id
  }
}

export function deletePost (id) {
  return {
    type: 'DELETE_POST',
    id
  }
}

export function updatePost (id) {
  return {
    type: 'UPDATE_POST',
    id
  }
}
