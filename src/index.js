import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import { AppContainer } from 'react-hot-loader'


ReactDOM.render(
  <AppContainer>
    <Header/>
  </AppContainer>,
  document.getElementById('root')
)


// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Header', () => {
    const NextApp = require('./components/Header').default
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
