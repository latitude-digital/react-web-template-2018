import React from 'react'
import BasicButton from '../BasicButton'
import style from './_Loading.module.scss'

export default function Loading(props) {
    let content = null;

    if (props.error) {
        content = (
            <div className={style.message}>
                <p>There was an error loading the page...</p>
                <BasicButton
                    text="Retry"
                    onClick={ props.retry }
                />
            </div>
        );
    } else if (props.timedOut) {
        content = (
            <div className={style.message}>
                <p>It's taking too long to load the page... </p>
                <BasicButton
                    text="Retry"
                    onClick={ props.retry }
                />
            </div>
        );
    } else if (props.pastDelay) {
        content = (
            <div className={style.message}>Loading...</div>
        );
    }

    return (
        <div className={style.container}>
            {content}
        </div>
    )
}