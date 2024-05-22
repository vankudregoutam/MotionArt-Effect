import React from 'react'
import { Link } from 'react-router-dom'

const Visitors = () => {
    return (
        <>
            <div className="container">
                <h2 className='visitors-heading'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h2>
                <p className='visitors-description'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
                <Link to='https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891' target='_blank' className="btn purchase-button">Puchase from Envato<i className="fa-solid mx-4 fa-arrow-right"></i></Link>
                <div className="d-flex">
                    <img className='stick' src="/img/motionarteffect-img5.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Visitors
