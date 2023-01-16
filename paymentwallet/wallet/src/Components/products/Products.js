import React from 'react'
import UserCarosuel from './Carosuel'
import MediaCard1 from './Material1'
import './Products.css'

export default function Products() {
    return (
        <div>
            {/* carosuel srarts */}
            <div className="container usermargin">
                                
            {/* <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./assets/gif1.gif" class="d-block w-100 user-carosuel" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="carosueltext1">Easy and Fast Payments</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/gif2.gif" class="d-block w-100 user-carosuel" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="carosueltext1">Payments are on tap now</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/gif3.gif" class="d-block w-100 user-carosuel" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="carosueltext1">Scan for Payments</h5>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>                
               </div> */}
               
            </div>
{/* carosuel ends here */}

{/* responsive cards starts */}

             <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-9 col-md-8 col-lg-4 my-4">
            <MediaCard1/>
             </div>
             <div className="col-12 col-sm-9 col-md-8 col-lg-4 my-4">
             {/* <MediaCard2/> */}
             </div>
             <div className="col-12 col-sm-9 col-md-8 col-lg-4 my-4">
             {/* <MediaCard3/> */}
             </div>
             <div className="col-12 col-sm-9 col-md-8 col-lg-4 my-4">
             {/* <MediaCard4/> */}
             </div>
             <div className="col-12 col-sm-9 col-md-8 col-lg-4 my-4">
             {/* <MediaCard5/> */}
             </div>
             <div className="col-12 col-sm-9 col-md-8 col-lg-4 my-4">
             {/* <MediaCard6/> */}
             </div>
             </div>
             </div>



            {/* <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 my-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Need Medicines ?</h5>
                                <p class="card-text">Get Original medicines on best prices.
                                </p>
                                <a href="/" class="btn btn-primary">Medicines</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 my-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Book a Movie Ticket</h5>
                                <p class="card-text">Get Movie Tickets on best prices.
                                </p>
                                <a href="/" class="btn btn-primary">Book a Ticket</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 my-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Payment for Malls</h5>
                                <p class="card-text">Purchase anything from anywere,anytime.
                                </p>
                                <a href="/" class="btn btn-primary">Paymets</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 my-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Self Payments</h5>
                                <p class="card-text">Do a Self payment from anywhere, anytime.
                                </p>
                                <a href="/" class="btn btn-primary">Self Payment</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 my-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Education Fees</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.
                                </p>
                                <a href="/" class="btn btn-primary">Pay Fees</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 my-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Wallet Recharge</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.
                                </p>
                                <a href="/" class="btn btn-primary">Recharge</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 my-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Mobile Recharge</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.
                                </p>
                                <a href="/" class="btn btn-primary">Recharge</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 my-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Credit-Card Bill Payment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.
                                </p>
                                <a href="/" class="btn btn-primary">Pay Bill</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 my-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Rent Payment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.
                                </p>
                                <a href="/" class="btn btn-primary">Pay Rent</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 my-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Loan Repayment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.
                                </p>
                                <a href="/" class="btn btn-primary">Pay Loan</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 my-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Car Insaurance</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.
                                </p>
                                <a href="/" class="btn btn-primary">Book an appointment</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 my-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Health</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.
                                </p>
                                <a href="/" class="btn btn-primary">Health</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* responsive cards ends */}
        </div>
    )
}
