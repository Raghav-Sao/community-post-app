import React, { Component } from 'react'
import './style.css'

class Post extends Component {
  render() {
    return (
      <div className="post__container flex__container dir__column">
        <div className="post__write flex__container">
          <span className="icon-pencil-circled" />
          <input type="text" placeholder="Write a Post..." />
        </div>
        <div className="post__type__container flex__container">
          <div className="flex__100 m-10">Select Post Type</div>
          <button className="flex__100 active m-b-10">
            <span className="icon-ok-circled2">For Sale - Looking for Resellers</span>
          </button>
          <button className="flex__50">
            <span className="icon-ok-circled2">Looking for Suppliers</span>
          </button>
          <button className="flex__50">
            <span className="icon-ok-circled2">General Update</span>
          </button>
        </div>
        <div className="flex__container post_creator__footer">
          <div className="flex__50">
            <span className="icon-camera">Add photos</span>
          </div>
          <div className="flex__50 text__right">Post to FB Page</div>
        </div>
      </div>
    )
  }
}

export default Post
