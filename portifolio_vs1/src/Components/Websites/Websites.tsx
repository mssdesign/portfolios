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
        <div className="Websites_Page" id="webPages">
            <div className="Websites_Page_main">
                <h2>Webpages</h2>
                <div className="Websites">
                    <div className="Website_card">
                        <img src={AnimatedLogin} alt="" />
                        <p>Página de Login</p>
                    </div>
                    <div className="Website_card">
                        <img src={DrinkWater} alt="" />
                        <p>Beba Água</p>
                    </div>
                    <div className="Website_card">
                        <img src={GamesPage} alt="" />
                        <p>Xbox ou PlayStation</p>
                    </div>
                    <div className="Website_card">
                        <img src={Hotel} alt="" />
                        <p>Hotel Paraíso</p>
                    </div>
                    <div className="Website_card">
                        <img src={PasswordGenerator} alt="" />
                        <p>Gerador de Senhas</p>
                    </div>
                    <div className="Website_card">
                        <img src={onlineNote} alt="" />
                        <p>Notas Online</p>
                    </div>
                    <div className="Website_card">
                        <img src={ReactFood} alt="" />
                        <p>AllFoods</p>
                    </div>
                    <div className="Website_card">
                        <img src={SuperFilms} alt="" />
                        <p>Superfilmes HD</p>
                    </div>
                    <div className="Website_card">
                        <img src={TicTacToe} alt="" />
                        <p>Jogo da Velha</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Websites