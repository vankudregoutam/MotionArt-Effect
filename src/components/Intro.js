import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <>
            <div className="container-fluid">
                <img className='motionart-effect' src="/img/MotionArtEffect-logo.png" alt="" />
                <div className="button-flex">
                    <Link className='btn button-style' to='https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891' target='_blank'>Purchase Now</Link>
                </div>
            </div>
            <div className="container">
                <h5 className='transform'>Transform Your Website</h5>
                <p className='motion-art-effect'>With Motion Art Effect</p>
                <h1 className='visitor-attention'>Attract Your Visitors Attention With Colorfull <span className='visitor-attention-motion-art'>Motion Art Effect</span></h1>
                <p className='description'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.</p>
            </div>
        </>
    )
}

export default Intro
