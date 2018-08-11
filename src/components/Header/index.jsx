import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'

class Header extends Component {
  render() {
    const { showAlert } = this.props
    debugger
    return (
      <div className="header flex__container">
        <div className="nav__toggle">
          <span className="icon-align-justify icon__button" />
        </div>
        <div className="header__text">Community</div>
        <div className="header__right__icons flex__container">
          <span className="icon-basket icon__button" />
          <span className="icon-bell icon__button" />
          <span className="icon-search icon__button" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ alertReducer: showAlert }) => ({
  showAlert,
})

export default connect(mapStateToProps)(Header)
