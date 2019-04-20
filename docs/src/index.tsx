import * as React from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { GlobalStyle } from './containers'

render(
  <React.StrictMode>
    <>
      <App/>
      <GlobalStyle/>
    </>
  </React.StrictMode>
, document.getElementById('root'))