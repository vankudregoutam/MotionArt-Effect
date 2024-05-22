import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="container-footer">
                <p className='footer'>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
                <div className="footer-flex">
                    <Link to='https://qodematrix.com/docs/motion-art-for-elementor/' target='_blank' className="btn footer-color">Documentation</Link>
                    <Link to='https://support.qodematrix.com/' target='_blank' className="btn footer-color">Support</Link>
                </div>
            </div>
        </>
    )
}

export default Footer
