import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter} from 'react-router-dom'

import style from './_Navigation.module.scss'

const navLinks = [
    {
        name: 'Home',
        path: '/',
    },
    {
        id: 1,
        separator: true,
    },
    {
        name: 'Testing',
        path: '/testing',
    },
];

const Navigation = (props) => {

    const {
        history: {
            location,
        },
    } = props;

    function renderNavLinks(){
        return navLinks.map(link => {
            if(link.separator){
                return (
                    <span
                        key={link.id}
                        className={style.nav_link_separator}
                    >

                    </span>
                )
            }

            let linkStyle = `${style.nav_link} `;
            const isActiveLink = (
                link.path === location.pathname
            );

            if(isActiveLink){
                linkStyle += style.nav_link_active;
            }

            return (
                <Link
                    key={link.path}
                    to={link.path}
                    className={linkStyle}
                >
                    {link.name}
                </Link>
            )
        })
    }

    return (
        <div className={style.container}>
            <div className={style.nav_link_container}>
                {renderNavLinks()}
            </div>
        </div>
    )
};

Navigation.propTypes = {
    history: PropTypes.object.isRequired,
};

export default withRouter(Navigation)