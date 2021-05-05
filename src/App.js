import DiaryScreen  from './components/DiaryScreen/DiaryScreen'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.scss';
import Signup from './components/Signup'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'  
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from './components/ForgotPassword'
import StreetMap from './components/StreetMap/StreetMap';
import UpdateProfile from './components/UpdateProfile';
import CreateCompany from './components/fireStoreProject/CreateProject';
import WikiExporter from './components/WikiExporter/WikiExporter';
import HomeScreen from './components/HomeScreen/HomeScreen';

function App() {
  return (
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <div className="w-100">
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard}/>
                <PrivateRoute exact path="/home" component={HomeScreen}/>
                <PrivateRoute path="/update-profile" component={UpdateProfile}/>
                <PrivateRoute path="/diary" component={DiaryScreen}/>
                <PrivateRoute path="/export" component={WikiExporter}/>
                <div className="w-100" style={{maxWidth: "400px"}}>
                  <Route path="/sign-up" component={Signup}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/map" component={StreetMap}/>
                  <Route path="/forgot-password" component={ForgotPassword}/>
                  <Route path="/create" component={CreateCompany}/>
                </div>
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
  )
}

export default App;