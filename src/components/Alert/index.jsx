import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { changeAlertStatus } from 'actions/PostAction'
import './style.css'

class Alert extends Component {
  render() {
    const { showAlert = false, alertText } = this.props
    return (
      <Fragment>
        {showAlert && (
          <div className="header flex__container">
            <span className="flex__rest flex__container flex__jcenter success">{alertText}</span>
            <span
              className="flex__auto flex__aright icon__button"
              onClick={() => this.props.dispatch(changeAlertStatus({}))}
            >
              ✘
            </span>
          </div>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = ({ postReducer: { showAlert, alertText } }) => ({
  showAlert,
  alertText
})

export default connect(mapStateToProps)(Alert)
