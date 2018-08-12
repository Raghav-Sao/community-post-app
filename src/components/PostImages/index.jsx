import React, { Component } from 'react'

import './style.css'

class PostImages extends Component {
  render() {
    const { imgUrls } = this.props
    return (
      <div className="post__gallery flex__container">
        {imgUrls.slice(0, 2).map((url, index) => (
          <div
            className={`image__container ${imgUrls.length > 1 ? 'flex__49' : 'flex__rest'}`}
            key={index}
          >
            <img className="post__image" src={url} alt="img" />
          </div>
        ))}
        {imgUrls.slice(2, 5).map((url, index) => (
          <div
            className={`image__container m-t-10 ${
              imgUrls.length === 3 ? 'flex__100' : imgUrls.length > 4 ? 'flex__32' : 'flex__49'
            }`}
            key={index + 2}
          >
            <img className="post__image" src={url} alt="img" />
          </div>
        ))}
      </div>
    )
  }
}

export default PostImages
