import React from "react"
import './Websites.css'
import AnimatedLogin from '../../Assets/WebSitesPreview/Animated_login.png'
import DrinkWater from '../../Assets/WebSitesPreview/DrinkWater.png'
import GamesPage from '../../Assets/WebSitesPreview/GamesPage.png'
import Hotel from '../../Assets/WebSitesPreview/Hotel.png'
import onlineNote from '../../Assets/WebSitesPreview/onlineNote.png'
import PasswordGenerator from '../../Assets/WebSitesPreview/PasswordGenerator.png'
import ReactFood from '../../Assets/WebSitesPreview/ReactFood.png'
import SuperFilms from '../../Assets/WebSitesPreview/SuperFilms.png'
import TicTacToe from '../../Assets/WebSitesPreview/TicTacToe.png'

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
                        <img src={DrinkWater} alt="" />
                        <p>Login Page</p>
                    </div>
                    <div className="Website_card">
                        <img src={GamesPage} alt="" />
                        <p>Login Page</p>
                    </div>
                    <div className="Website_card">
                        <img src={Hotel} alt="" />
                        <p>Login Page</p>
                    </div>
                    <div className="Website_card">
                        <img src={PasswordGenerator} alt="" />
                        <p>Login Page</p>
                    </div>
                    <div className="Website_card">
                        <img src={onlineNote} alt="" />
                        <p>Login Page</p>
                    </div>
                    <div className="Website_card">
                        <img src={ReactFood} alt="" />
                        <p>Login Page</p>
                    </div>
                    <div className="Website_card">
                        <img src={SuperFilms} alt="" />
                        <p>Login Page</p>
                    </div>
                    <div className="Website_card">
                        <img src={TicTacToe} alt="" />
                        <p>Login Page</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Websites