import React, { Component } from 'react'
import './style.css'

class Comment extends Component {
  render() {
    const { comments } = this.props
    return (
      <div className="post__comments flex__container">
        {comments.map(({ profileImage, userName, comment }, index) => (
          <div className="post__comment flex__container m-t-10" key={index}>
            <div className="post__user__image__container">
              <img className="post__user__image flex__auto" src={profileImage} alt="img" />
            </div>
            <div className=" flex__container flex__rest border__bottom">
              <span className="flex__container comment__text">
                {userName} {comment}
              </span>
              <div className="comment__time flex__container flex__aright flex__rest">2D</div>
              <div className="border" />
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Comment
