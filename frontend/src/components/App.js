import React, { Component } from 'react'
import Posts from './Posts'
import PostForm from './PostForm'

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Redux Post!</h1>
        <PostForm />
        <Posts />
      </div>
    )
  }
}

export default App
