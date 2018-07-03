import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import {
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <div>
          <Header/>
          <Route path="/" exact={true} component={Welcome}/>
          <Routh path='/cities' component={City}/>
          <Routh path='/posts' component={Post}/>
          <Route path="/user/:userId" component={User}/>
          <PrivateRoute path="/feature" component={Feature}/>
        </div>
    </Router>
  </Provider>
  , document.getElementById('root'))
