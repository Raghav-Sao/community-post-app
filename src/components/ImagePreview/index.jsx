import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from 'components/Comment'
import PostComment from 'components/PostComment'

import './style.css'

class ImagesPreview extends Component {
  render() {
    const { imgUrls } = this.props
    return (
      <div className="image__preview flex__container">
        {imgUrls.map((url, index) => (
          <div className={'image__preview__container flex__container flex__10'}>
            <img className="preview__image" src={url} key={index} />
          </div>
        ))}
      </div>
    )
  }
}

export default ImagesPreview
