import React from 'react'

const Rating = () => {
    return (
        <>
            <div className="container">
                <h5 className='rating'>Trusted by thousands of users around the world</h5>
                <div className="row">
                    <div className="card card-style col-4">
                        <div className="card-body">
                            <img src="/img/motionarteffect-img2.png" alt="" />
                            <div className="rating-content">
                                <img src="/img/motionarteffect-img4.png" alt="" /><br />
                                <p style={{ marginTop: '15px' }}>4.5 score, 9 reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-style col-4">
                        <div className="card-body">
                            <img src="/img/motionarteffect-img1.png" alt="" />
                            <div className="rating-content">
                                <img src="/img/motionarteffect-img4.png" alt="" /><br />
                                <p style={{ marginTop: '15px' }}>4.5 score, 9 reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-style-1 col-4">
                        <div className="card-body">
                            <img src="/img/motionarteffect-img3.png" alt="" />
                            <div className="rating-content">
                                <img src="/img/motionarteffect-img4.png" alt="" /><br />
                                <p style={{ marginTop: '15px' }}>4.5 score, 9 reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rating
