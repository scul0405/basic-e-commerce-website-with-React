import React, { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './Navigation.scss'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user'
import { signOutUser } from '../../utilities/firebase/firebase'
import Cart from '../../Components/cart/Cart'

const Navigation = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const handleSignOut = async () => {
        await(signOutUser);
        setCurrentUser(null);
    }
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
                {
                    currentUser ? (
                        <div onClick={handleSignOut}>
                            SIGN OUT
                        </div>
                    )
                    :
                    (
                        <div >
                            SIGN IN
                        </div>
                    )
                }
                </Link>
                <div>
                    <Cart />
                </div>
            </div>
        </div>

        <Outlet />

        
    </Fragment>
  )
}

export default Navigation