import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Main from './Main/Main'
import {Breadcrumbs} from 'react-breadcrumbs-dynamic'
import GlobalError from 'components/GlobalError'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'

function NavLink(props){
    return (
        <Link to={props.to}>
            {props.children}
        </Link>
    )
}

function App(){
    return (
        <Fragment>

            <Navigation />

            <br />

            <div id="app">

                <Breadcrumbs
                    separator={<b> / </b>}
                    item={NavLink}
                    finalItem={'span'}
                    finalProps={{
                        style: {
                            color: '#0E7EA0',
                            cursor: 'default',
                        },
                    }}
                />

                <Main />

            </div>

            <Footer />

            <GlobalError />

        </Fragment>
    )
}

export default App
