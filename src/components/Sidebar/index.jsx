import React, { Component } from 'react'
import { connect } from 'react-redux'

import { filterPost } from 'actions/PostAction'
import './style.css'

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedPostType: [] }
  }

  filterPostType = event => {
    const { target: { checked, value } } = event
    let selectedPostType = []
    if (checked && this.state.selectedPostType.indexOf(value) === -1) {
      selectedPostType = [...this.state.selectedPostType, value]
    } else {
      selectedPostType = this.state.selectedPostType.filter(data => data != value)
    }
    this.setState(
      {
        selectedPostType,
      },
      () => {
        this.props.dispatch(filterPost({ postFilter: this.state.selectedPostType }))
      }
    )
  }
  render() {
    const { postFilter, showSidebar } = this.props
    return (
      <div className={`sidebar flex__container dir__column ${showSidebar ? 'active' : ''}`}>
        <div className="flex__container filter">Filter</div>
        <input
          type="checkbox"
          id="resellers-filter"
          className="hidden"
          onChange={e => this.filterPostType(e)}
          name="postType"
          value="Resellers"
          checked={postFilter.indexOf('Resellers') > -1}
        />
        <label
          htmlFor="resellers-filter"
          className="flex__container m-b-10 icon-check-empty icon__button"
        >
          Looking for Resellers
        </label>

        <input
          type="checkbox"
          id="suppliers-filter"
          className="hidden"
          onChange={e => this.filterPostType(e)}
          name="postType"
          value="Suppliers"
          checked={postFilter.indexOf('Suppliers') > -1}
        />
        <label htmlFor="suppliers-filter" className="flex__container icon-check-empty icon__button">
          Looking for Suppliers
        </label>
        <input
          type="checkbox"
          id="update-filter"
          className="hidden"
          onChange={e => this.filterPostType(e)}
          name="postType"
          value="Update"
          checked={postFilter.indexOf('Update') > -1}
        />
        <label htmlFor="update-filter" className=" flex__container icon-check-empty icon__button">
          General Update
        </label>
      </div>
    )
  }
}
const mapStateToProps = ({ postReducer: { postFilter, showSidebar } }) => ({
  postFilter,
  showSidebar,
})
export default connect(mapStateToProps)(Sidebar)
