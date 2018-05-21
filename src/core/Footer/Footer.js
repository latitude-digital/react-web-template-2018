import React from 'react'

import style from './_Footer.module.scss'

export default function Footer(){

    return (
        <div className={style.container}>

            <div>
                <span className={style.env}>
                    {process.env.NODE_ENV}
                </span>
                <span> - </span>
                <span className={style.version}>
                    v{APP_VERSION}
                </span>

            </div>

        </div>
    )

}
