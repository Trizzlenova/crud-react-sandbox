import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/postActions'

class PostForm extends Component {
  state = {
    newPost: ''
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ newPost: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addPost(this.state.newPost)
    this.setState({ newPost: '' })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.newPost}
        />
        <button>Add Post</button>
      </form>
    )
  }

}

export default connect(null, { addPost })(PostForm)
