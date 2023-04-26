//import logo from './logo.svg';
import './App.css';
import { useAuth0} from '@auth0/auth0-react'
import LogginButton from './components/LogginButton'
import Logoutbutton from './components/Logoutbutton'
import Profile from './components/Profile'

function App() {
  const {isAuthenticated,isLoading}= useAuth0()
    if (isLoading) return <h1>Cargando...</h1>
    return (
      <div className="App">
        {isAuthenticated ? <Logoutbutton/> :  <LogginButton/>}
        <Profile/>
  
      </div>
    );
  }
  
  export default App;