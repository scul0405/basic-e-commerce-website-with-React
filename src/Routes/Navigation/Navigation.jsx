import React, { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './Navigation.scss'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

const Navigation = () => {
  return (
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to ='/'>
                <CrwnLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to ='/shop'>
                    <div >
                        SHOP
                    </div>
                </Link>
                <Link className='nav-link' to ='/signIn'>
                    <div >
                        SIGN IN
                    </div>
                </Link>
            </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation