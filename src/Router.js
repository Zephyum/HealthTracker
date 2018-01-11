import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import LibraryList from './components/LibraryList'
import MainData from './components/MainData'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Scene>
        <Scene key="main">
          <Scene key="dataList" component={MainData} title="Ease Your Mind" />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent
