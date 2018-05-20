import style from './_BasicButton.module.scss'
import React from 'react'
import PropTypes from 'prop-types'

const BasicButton = (props) => {

    const {
    //data
        id,
        tabIndex,
        disabled,

        // options
        text,
        icon,
        type,
        className,
        color,
        backgroundColor,
        containerStyle,

        // events
        getRef,
        onClick,
        onMouseDown,
    } = props;

    const classNames = (
        className.indexOf('bg') > -1
            ? className
            : 'bg-white '+ className
    ).trim();

    const userStyle = {
        color,
        backgroundColor,
    };

    const buttonContent = () => {
        if(icon){
            return (
                <div className={style.icon}>
                    {icon}
                </div>
            )
        }
        return (
            <span className={style.text}>
                {text}
            </span>
        )
    };

    const containerStyleNames = `${style.container} ${containerStyle}`;

    return (
        <div className={containerStyleNames}>
            <button
                ref={getRef}
                type={type || 'button'}
                className={`${style.basic_button} ${style.hoverable} ${classNames}`}
                style={userStyle}
                onClick={onClick}
                onMouseDown={onMouseDown}
                tabIndex={tabIndex}
                id={id}
                disabled={disabled}
            >
                <div className={style.active_darken}> </div>
                <div className={style.hover_lighten}> </div>
                {buttonContent()}
            </button>
        </div>
    );
};

BasicButton.propTypes = {
    //data
    id: PropTypes.string,
    tabIndex: PropTypes.string,
    disabled: PropTypes.bool,

    // options
    text: PropTypes.string,
    icon: PropTypes.object,
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    containerStyle: PropTypes.string.isRequired,

    // events
    onClick: PropTypes.func,
    getRef: PropTypes.func,
    onMouseDown: PropTypes.func,
};

BasicButton.defaultProps = {
    //data
    id: '',
    tabIndex: '',


    // options
    text: '',
    type: 'button',
    className: '',
    color: '',
    backgroundColor: '',
    containerStyle: '',

    // events
    getRef: ()=>{},
    onClick: null,
    onMouseDown: null,
};

export default BasicButton
