import React, { Component } from 'react'
import { Provider } from 'react-redux'
import 'assets/fontello/css/fontello.css'
import Alert from 'components/Alert'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Post from 'components/Post'
import CreatePost from 'components/CreatePost'
import store from './store'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container__main">
          <Header />
          <Alert />
          <Sidebar />
          <CreatePost />
          <Post />
        </div>
      </Provider>
    )
  }
}

export default App
