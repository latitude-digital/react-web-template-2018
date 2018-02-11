import React, { Fragment } from 'react'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import Bundle from '../../../utils/Bundle'

import loadHome from 'bundle-loader?lazy&name=[name]!pages/Home'
import loadNotFound from 'bundle-loader?lazy&name=[name]!pages/NotFound'
import loadTesting from 'bundle-loader?lazy&name=[name]!pages/Testing'


export const Home = (props) => (
  <Bundle load={loadHome}>
    {(Home) => withCrumb(Home, props, '/home', 'Home')}
  </Bundle>
);

export const Testing = (props) => (
  <Bundle load={loadTesting}>
    {(Testing) => withCrumb(Testing, props, '/testing', 'Testing')}
  </Bundle>
);

export const NotFound = (props) => (
  <Bundle load={loadNotFound}>
    {(NotFound) => withCrumb(NotFound, props, '/not-found', 'Not Found')}
  </Bundle>
);


function withCrumb(Component, props, to, title){
  return (
    <Fragment>
      <BreadcrumbsItem to={to}>
        {title}
      </BreadcrumbsItem>
      <Component {...props}/>
    </Fragment>
  )
}