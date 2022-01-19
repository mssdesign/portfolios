import React from "react"
import './Websites.css'
import AnimatedLogin from '../../Assets/WebSitesPreview/Animated_login.png'

const Websites = () => {
    return (
        <div className="Websites_Page">
            <div className="Websites_Page_main">
                <h2>Webpages</h2>
                <div className="Websites">
                    <div className="Website_card">
                        <img src={AnimatedLogin} alt="" />
                        <p>Login Page</p>
                    </div>
                    <div className="Website_card">
                        <img src={AnimatedLogin} alt="" />
                        <p>Login Page</p>
                    </div>
                    <div className="Website_card">
                        <img src={AnimatedLogin} alt="" />
                        <p>Login Page</p>
                    </div>
                    <div className="Website_card">
                        <img src={AnimatedLogin} alt="" />
                        <p>Login Page</p>
                    </div>
                    <div className="Website_card">
                        <img src={AnimatedLogin} alt="" />
                        <p>Login Page</p>
                    </div>
                    <div className="Website_card">
                        <img src={AnimatedLogin} alt="" />
                        <p>Login Page</p>
                    </div>
                    <div className="Website_card">
                        <img src={AnimatedLogin} alt="" />
                        <p>Login Page</p>
                    </div>
                    <div className="Website_card">
                        <img src={AnimatedLogin} alt="" />
                        <p>Login Page</p>
                    </div>
                    <div className="Website_card">
                        <img src={AnimatedLogin} alt="" />
                        <p>Login Page</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Websites