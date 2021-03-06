import React, { Fragment } from 'react'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'

import Loadable from 'react-loadable';
import Loading from 'components/Loading'

export const Home = Loadable({
    loading: Loading,
    timeout: 10000,
    loader: () => import('pages/Home'),
    render(loaded, props) {
        return withCrumb(loaded.default, props, '/home', 'Home')
    },
});

export const Testing = Loadable({
    loading: Loading,
    timeout: 2000,
    loader: () => {
        return new Promise((resolve) => {
            setTimeout(() =>{
                resolve(import('pages/Testing'));
            }, 4000)
        })
    },
    render(loaded, props) {
        return withCrumb(loaded.default, props, '/testing', 'Testing')
    },
});


export const NotFound = Loadable({
    loading: Loading,
    timeout: 10000,
    loader: () => import('pages/NotFound'),
});

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
