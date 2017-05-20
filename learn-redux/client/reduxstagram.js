import React from 'react'
import ReactDOM from 'react-dom'

import './styles/style.styl'
import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path='/view/:postId' component={Single} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'))
