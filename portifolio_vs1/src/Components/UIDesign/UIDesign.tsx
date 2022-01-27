import React from 'react'
import './UIDesign.css'
import visita from '../../Assets/visita.png'
import MAR from '../../Assets/MARMock.png'
import PersonaFit from '../../Assets/PersonaFit.png'

const UIDesign = () => {
  return (
    <div className="UIDesign_Page" id="uiDesign">
      <div className="UIDesign_Page_main">
        <h2>Interfaces</h2>
        <div className="Mockups">
          <a
            href="https://dribbble.com/shots/17346318-PersonaFit"
            target="_blank"
            className="Mockup_container"
          >
            <h4>PersonaFit</h4>
            <img src={PersonaFit} className="mockup" />
          </a>
          <a
            href="https://dribbble.com/shots/17346197-MAR-Melhorias-da-Auto-Responsabilidade"
            target="_blank"
            className="Mockup_container"
          >
            <h4>MAR</h4>
            <img src={MAR} className="mockup" />
          </a>
          <a
            href="https://dribbble.com/shots/17346424-App-Cart-o-de-Visitas"
            target="_blank"
            className="Mockup_container"
          >
            <h4>Find You</h4>
            <img src={visita} className="mockup" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default UIDesign
