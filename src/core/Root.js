import React, { Fragment } from 'react'
import { HashRouter } from 'react-router-dom'

import App from './App'
import DevTools from 'components/DevTools';

export default function Root(){
  return (
    <Fragment>
      <HashRouter>
        <App/>
      </HashRouter>
      <DevTools />
    </Fragment>
  )
}
