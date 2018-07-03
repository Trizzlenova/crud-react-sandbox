import React, { Component } from 'react'
import { connect } from 'react-redux'
import { togglePost, deletePost } from '../actions/postActions'


class Posts extends Component {
  render () {
    return (
      <div>
        <li>
          {this.props.posts.map(post => (
            <div>
            <span
              key={post.id}
              onClick={() => this.props.togglePost(post.id)} >
                {post.title}: {post.completed.toString()}
            </span>
            <span
              onClick ={() => this.props.deletePost(post.id)}>X
            </span>
            </div>
          ))}
        </li>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { togglePost, deletePost })(Posts)
