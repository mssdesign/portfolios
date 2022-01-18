import React from "react"
import './UIDesign.css'
import Vzero from '../../Assets/VzeroMock.png'
import MAR from '../../Assets/MARMock.png'

const UIDesign = () => {
    return (
        <div className="UIDesign_Page">
            <div className="UIDesign_Page_main">
                <h2>UI Designs</h2>
                <div className="Mockups">
                    <div className="Mockup_container">
                        <img src={Vzero} className="mockup" />
                    </div>
                    <div className="Mockup_container">
                        <img src={MAR} className="mockup" />
                    </div>
                    <div className="Mockup_container">
                        <img src={Vzero} className="mockup" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UIDesign