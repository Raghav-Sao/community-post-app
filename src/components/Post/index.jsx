import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Comment from 'components/Comment'
import PostComment from 'components/PostComment'
import PostImages from 'components/PostImages'
import * as moment from 'moment'

import './style.css'

class Post extends Component {
  render() {
    const { postData, postFilter } = this.props
    const filteredData = postData.filter(
      data => postFilter.length === 0 || postFilter.indexOf(data.lookingFor) >= 0
    )
    return (
      <Fragment>
        {filteredData.map(
          (
            { comments, imgUrls, location, lookingFor, postText, profileImage, time, userName },
            index
          ) => (
            <div className="post__container flex__container dir__column flex__card" key={index}>
              <div className="post__header flex__container">
                <img className="post__user__image" src={profileImage} alt="img" />
                <div className="flex__container post__title flex__rest">
                  <div className="flex__container flex__100">
                    <a className="link">{userName}</a> is looking for&nbsp;
                    <a className="link">{lookingFor}</a>
                  </div>
                  <div className="flex__container flex__100">
                    <span>{moment(new Date(time)).fromNow(true)}&nbsp;</span>
                    <span>{location}</span>
                  </div>
                </div>
                <span className="post__option">:</span>
              </div>
              <div className="post__text flex__container">
                <span className="post__text">{postText}</span>
              </div>
              <PostImages imgUrls={imgUrls} />
              <div className="post__like__count flex__container">you & 52 others like this</div>
              <div className="post__footer flex__container">
                <span className="icon-heart flex__auto f-15 icon__button">Like</span>
                <span className="flex__container flex__jcenter flex__rest">
                  <span className="icon__button">View Previous comments(50)</span>
                </span>
                <span className="icon-share flex__auto f-15 icon__button" />
              </div>
              <Comment comments={comments} />
              <PostComment />
            </div>
          )
        )}
        {filteredData.length === 0 && (
          <div className="post__empty__info flex__container flex__card">No Data Available!!!</div>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = ({ postReducer: { postData, postFilter } }) => ({ postData, postFilter })
export default connect(mapStateToProps)(Post)
