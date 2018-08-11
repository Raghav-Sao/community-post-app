import React, { Component } from 'react'
import { Provider } from 'react-redux'
import 'assets/fontello/css/fontello.css'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Post from 'components/Post'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div className="container__main">
          <Header />
          <Sidebar />
          <Post />
        </div>
      </Provider>
    )
  }
}

export default App
