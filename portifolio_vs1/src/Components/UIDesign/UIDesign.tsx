import React from 'react'
import './UIDesign.css'
import Vzero from '../../Assets/VzeroMock.png'
import MAR from '../../Assets/MARMock.png'
import PersonaFit from '../../Assets/PersonaFit.png'

const UIDesign = () => {
  return (
    <div className="UIDesign_Page">
      <div className="UIDesign_Page_main">
        <h2>UX/UI Designs</h2>
        <div className="Mockups">
          <div className="Mockup_container">
            <h4>Vzerolog</h4>
            <img src={Vzero} className="mockup" />
          </div>
          <div className="Mockup_container">
            <h4>MAR</h4>
            <img src={MAR} className="mockup" />
          </div>
          <div className="Mockup_container">
            <h4>PersonaFit</h4>
            <img src={PersonaFit} className="mockup" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UIDesign
