import React from 'react';
import './Home.scss';
import playButton from '../../assets/images/play-button.png';
import profilePicture from '../../assets/images/profile-picture-circle.png';
import firstSection from '../../assets/images/first-section.png';
import sharedSection from '../../assets/images/shared-section.png';
import billingExample from '../../assets/images/framework.png';
import soon from '../../assets/images/soon-section.png';
import icon from '../../assets/images/icon.png';

const Home = () => {
    return (
        <div className="wrapper">
            <section className="main">
                <div className="main-overlay">
                    <div className="main-content">
                        <div className="text-content">
                            <h1 className="main-title">Easily create or join a local nanny share with Hapu</h1>

                            <p className="main-subtitle">
                                Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affortable solutions in childcare.
                            </p>

                            <div className="see-hapu">
                                <button className="play-button">
                                    <img alt="play button" src={playButton}/>
                                </button>

                                <p>
                                    See Hapu in action (27 seconds)
                                </p>
                            </div>
                        </div>

                        <aside className="cta-top">
                            <div className="main-cta">
                                <div className="profile-main-example">
                                    <figure>
                                        <img className="pf" alt="profile-example" src={profilePicture}/>
                                        <p>
                                            Jane
                                        </p>
                                    </figure>

                                    <span className="smile-icon"></span> 

                                    <figure>
                                        <img className="pf" alt="profile-example" src={profilePicture}/>
                                        <p>
                                            Kate
                                        </p>
                                    </figure>
                                </div>

                                <h4>Congratulaltions Kate has joined your nanny share</h4>

                                <button className="btn btn-purple">
                                    Manage Your Nanny Share
                                </button>

                                <p>
                                    You will recieve a recipient via email for this payment
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="notice-content">
                <div className="notice-warning">
                    <span className="profile-circle">
                        <img alt="Sarah's profile" src={profilePicture}/>
                    </span>

                    <p>
                        <span className="marked-text">
                            Sarah's day care available now in North Sydney 
                        </span> Wednesday, Thursday, Friday - 7:30 - 5:30   
                    </p>
                </div>
            </section> 

            <section className="product">
                <aside className="about-product">
                    <h2>
                        Share your home, <br/>
                        nanny and costs
                    </h2>

                    <p>
                        You have a fantastic home, a fantastic nanny and wouldn't
                        cutting your costs in half be, well, fantastic?! If onty it was
                        easy to connect with other parents to share your costs?
                        Well now itis, with Hapu. <span className="marked-text">Hapu means tribe</span> and it's our
                        foundational 3 tribal principles that empowers you to
                        create and manage your own tribe. A tribe that together
                        has the power to create new affordable solutions in
                        childcare that work for you and your community.
                    </p>

                    <a href="/" className="marked-text">Ready to get started?</a>
                </aside>

                <img className="image-product-price" alt="Product price" src={firstSection}/>
            </section>

            <hr className="hr-style"/>

            <section className="newsletter">
                <h2>
                    Are you a parent without a nanny and looking to share?
                </h2>

                <p>
                    Leave us your name and email and we'll update you as soon as a share becomes available in your area!
                </p>

                <form className="from-newsletter" action="/" method="post">
                    <input type="text" name="user-name" placeholder="Your name" required/>
                    <input type="email" name="user-email" placeholder="Your email" required/>
                    <input type="submit" className="btn btn-newsletter"/>
                </form>
            </section>

            <hr className="hr-style"/>

            <section className="shared-payments">
                <img alt="Example about the shared payments" src={sharedSection}/>

                <aside className="shared-text">
                    <h2>Shared payments made simple</h2>

                    <p>
                        Sometimes its hard enough just sharing a restaurant bill. Iry
                        sharing that bill week in, week out and you might encounter
                        more than a few snares. But not with Hapu. Simply set your
                        rates and our automated payment system takes care of the
                        rest. You need never talk money or who owes what.
                    </p>

                    <a href="/" className="marked-text">
                        Read how Bridget's share (without Hapu) ended over 15$  
                    </a>
                </aside>
            </section>

            <hr className="hr-style"/>

            <section className="about-framework">
                <h2>    
                    A framework built for the long term
                </h2>

                <p>
                    Childcare is for the long term. And you need a framework you can count on that gives your share long
                    term viability and success. That's why we've defined Hapu around our three tribal principles; clearly
                    defined process, transparency over money and equality of participation.
                </p>

                <a href="/" className="marked-text">
                    Read now Hapu's tribal background defines our app
                </a>

                <hr/>
            </section>

            <hr className="hr-style" id="hr-billing"/>

            <div className="billing-example">
                <img alt="Billing example" src={billingExample}/>
            </div>

            <hr className="hr-style"/>

            <section className="soon">
                <img alt="Cooming soon" src={soon}/>

                <h2>Cooming soon: Nanny Share Daily Diary!</h2>

                <p>
                    With the Hapu daily diary your nanny will be able to update you and your sharers with photos and
                    commentary of the day. You and sharers will receive notifications and you'll be able to login to view the
                    daily adventures fo your little ones. We can't wait!
                </p>
            </section>

            <section className="become-section">
                <h2>Become a nanny share host</h2>

                <p>Takes less than 5 minutes to get started</p>

                <button className="btn btn-purple">
                    <img alt="Icon button" src={icon}/>

                    <p>
                        Create Your Nanny Share
                    </p>
                </button>

                <a href="/" className="marked-text">Or browse local nanny-shares</a>
            </section>
        </div>
    )
}

export default Home