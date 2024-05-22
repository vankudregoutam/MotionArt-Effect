import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar container-fluid">
                <Link className="navbar-brand mx-3" target='_blank' to="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891">
                    <img src="/img/motionarteffect-img2.png" alt="" width="30" height="30" className="d-inline-block align-text-top" />
                    <span style={{ color: 'white', fontWeight: 'bold' }}>envato</span><span style={{ color: '#52a92a' }}>market</span>
                </Link>
                <div className="d-flex">
                    <Link className='btn buy-now' to='https://codecanyon.net/checkout/102300331/billing_details' target='_blank'>Buy now</Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar
