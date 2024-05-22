import React from 'react'

const Features = () => {
    return (
        <>
            <div className="container">
                <center>
                    <h1 className='features-heading'>An All-Round Plugin With Powerful Features</h1>
                    <p className='features-description'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
                </center>
                <div className="row">
                    <div className="card features-card col-4">
                        <div className="card-body">
                            <img className='features-img' src="/img/motionarteffect-img9.png" alt="" />
                            <h2 className='features-img-heading'>Light Weight</h2>
                            <p className='features-img-description'>Motion Art for Elementor is designed to be lightweight.</p>
                        </div>
                    </div>
                    <div className="card features-card col-4">
                        <div className="card-body">
                            <img className='features-img' src="/img/motionarteffect-img6.png" alt="" />
                            <h2 className='features-img-heading'>100% Responsive</h2>
                            <p className='features-img-description'>Create a consistent visual experience across all devices.</p>
                        </div>
                    </div>
                    <div className="card features-card-interface col-4">
                        <div className="card-body">
                            <img className='features-img-interface' src="/img/motionarteffect-img7.png" alt="" />
                            <h2 className='features-img-heading'>User Friendly Interface</h2>
                            <p className='features-img-description'>Ensure a smooth experience for both applicants and administrators.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
