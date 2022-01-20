import './App.css'
import Header from './Components/Header/Header'
import Profile from './Components/Profile/Profile'
import UIDesign from './Components/UIDesign/UIDesign'
import Websites from './Components/Websites/Websites'
import MobileApps from './Components/MobileApps/MobileApps'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="background">
      <Header />
      <Profile />
      <UIDesign />
      <Websites />
      <MobileApps />
      <Contact />
    </div>
  )
}

export default App
