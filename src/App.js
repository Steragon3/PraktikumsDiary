import DiaryScreen  from './components/DiaryScreen/DiaryScreen'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/auth/Signup'
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
import WikiExporter from './components/WikiExporter/WikiExporter'
import Impressum from './components/Impressum/Impressum'
import Menu from './components/Menu/Menu'
import styles from './App.module.scss'
import CreateIntern from './components/CreateIntern/CreateIntern'


function App() {
  return (
      <div className={styles["main-container"]}>
          <Router>

            <AuthProvider>
            <Menu></Menu>
            <div className={styles.content}>
              <Switch>
                <PrivateRoute path="/diary" component={DiaryScreen}/>
                <PrivateRoute path="/export" component={WikiExporter}/>
                <PrivateRoute exact path="/" component={HomeScreen}/>
                <PrivateRoute path="/home" component={HomeScreen}/>
                
                <div className={styles.centered}>
                  <div className="w-100" style={{maxWidth: "500px"}}>
                    <Route path="/impressum" component={Impressum}/>
                    <PrivateRoute path="/profile" component={Dashboard}/>
                    <PrivateRoute path="/update-profile" component={UpdateProfile}/>
                    <Route path="/sign-up" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/map" component={StreetMap}/>
                    <Route path="/forgot-password" component={ForgotPassword}/>
                    <PrivateRoute path="/rate" component={CreateIntern}/>
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