import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
       <div className="app-container">
      <h1>React with Code</h1>
      <Login />
      <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App