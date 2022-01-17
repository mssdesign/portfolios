import './App.css'
import Header from './Components/Header/Header'
import Profile from './Components/Profile/Profile'

function App() {
  return (
    <div className="background">
      <Header />
      <div className="Main-Page">
        <Profile />
      </div>
    </div>
  )
}

export default App
