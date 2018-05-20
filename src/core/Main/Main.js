import style from './_Main.module.scss'
import React, { Component } from 'react'
import Routes from './routes';

import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'

class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <main className={style.container}>

                <BreadcrumbsItem to='/'>
                    Main
                </BreadcrumbsItem>

                { Routes }

            </main>
        )
    }
}

export default Main;