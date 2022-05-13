import React, { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to ='/'>
                <div >
                    LOGO
                </div>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to ='/shop'>
                    <div >
                        SHOP
                    </div>
                </Link>
            </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation