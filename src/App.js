import DiaryScreen  from './components/DiaryScreen/DiaryScreen'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import Signup from './components/auth/Signup'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'  
import StreetMap from './components/StreetMap/StreetMap';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Dashboard from './components/auth/Dashboard'
import Login from './components/auth/Login'
import PrivateRoute from './components/auth/PrivateRoute'
import VerifiedRoute from './components/auth/VerifiedRoute'
import ForgotPassword from './components/auth/ForgotPassword'
import UpdateProfile from './components/auth/UpdateProfile';
import CreateCompany from './components/fireStoreProject/CreateProject';
import WikiExporter from './components/WikiExporter/WikiExporter'
import Menu from './components/Menu/Menu'
import styles from './App.module.scss'
import CreateIntern from './components/CreateIntern/CreateIntern'
import HomeScreen from './components/HomeScreen/HomeScreen';
function App() {
  return (
      <div className={styles["main-container"]}>
          <Router>

            <AuthProvider>
            <Menu></Menu>
            <div className={styles.content}>
              <Switch>
                <VerifiedRoute path="/diary" component={DiaryScreen}/>
                <VerifiedRoute path="/export" component={WikiExporter}/>
                
                <div className={styles.centered}>
                  <div className="w-100" style={{maxWidth: "400px"}}>
                    <PrivateRoute exact path="/" component={HomeScreen}/>
                    <PrivateRoute path="/update-profile" component={UpdateProfile}/>
                    <Route path="/sign-up" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/map" component={StreetMap}/>
                    <Route path="/forgot-password" component={ForgotPassword}/>
                    <Route path="/create" component={CreateCompany}/>
                    <Route path="/home" component={HomeScreen}/>
                  </div>
                </div>
              </Switch>
            </div>
            </AuthProvider>

          </Router>
      </div>
  )
}

export default App;