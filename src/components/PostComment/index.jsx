import React, { Component } from 'react'
import './style.css'

class PostComment extends Component {
  render() {
    const {
      url = 'http://www.seymoreprints.com/images/Products/Large1/Fabulous-Pink-Georgette-Saree-With-Floral-Design-Leela7-2600_1.jpg',
    } = this.props
    return (
      <div className="post__create__comment flex__container m-10">
        <img className="user__image flex__auto" src={url} alt="img" />
        <textarea className="flex__rest" placeholder="Leave a comment..." />
      </div>
    )
  }
}

export default PostComment
