import './App.css'
import Header from './Components/Header/Header'
import Profile from './Components/Profile/Profile'
import UIDesign from './Components/UIDesign/UIDesign'
import Websites from './Components/Websites/Websites'
import MobileApps from './Components/MobileApps/MobileApps'
import Contact from './Components/Contact/Contact'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/portfolio">
          <div className="background">
            <Header />
            <Profile />
            <UIDesign />
            <Websites />
            <MobileApps />
            <Contact />
          </div>
        </Route>
        <Route exact path="/">
          <Redirect to="/portfolio" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
