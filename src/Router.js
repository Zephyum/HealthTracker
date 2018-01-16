import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import LibraryList from './components/LibraryList'
import MainData from './components/MainData'
import ChartView from './components/ChartView'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Quiet Mind" initial />
        </Scene>
        <Scene key="main">
          <Scene key="dataList" component={MainData} title="Free Your Mind" />
        </Scene>
        <Scene key="chart">
          <Scene key="chartView" component={ChartView} title="Ease Your Mind" />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent
