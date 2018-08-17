import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleSidebar } from 'actions/PostAction'
import './style.css'

class Header extends Component {
  toggleSidebar = e => {
    this.props.dispatch(toggleSidebar())
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
  }

  componentDidMount() {
    document.addEventListener('click', () => this.deactiveSidebar())
  }
  componentWillUnmount() {
    document.removeEventListener('click', () => this.deactiveSidebar())
  }

  deactiveSidebar() {
    const { showSidebar, dispatch } = this.props
    if (showSidebar) dispatch(toggleSidebar())
  }
  render() {
    return (
      <div className="header flex__container">
        <div className="nav__toggle" onClick={e => this.toggleSidebar(e)}>
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

const mapStateToProps = ({ postReducer: { showSidebar } }) => ({
  showSidebar,
})

export default connect(mapStateToProps)(Header)
