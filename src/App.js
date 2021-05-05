import DiaryScreen  from './components/DiaryScreen/DiaryScreen'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.scss';
import Signup from './components/auth/Signup'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'  
import Dashboard from './components/auth/Dashboard'
import Login from './components/auth/Login'
import PrivateRoute from './components/auth/PrivateRoute'
import ForgotPassword from './components/auth/ForgotPassword'
import UpdateProfile from './components/auth/UpdateProfile';
import CreateCompany from './components/fireStoreProject/CreateProject';
import WikiExporter from './components/WikiExporter/WikiExporter';
import Menu from './components/Menu/Menu'
function App() {
  return (
      <>
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <div className="w-100">
          
          <Router>
          <Menu>
          </Menu>
            <AuthProvider>
              <Switch>
                <Route exact path="/" component={Dashboard}/>
                <PrivateRoute path="/update-profile" component={UpdateProfile}/>
                <PrivateRoute path="/diary" component={DiaryScreen}/>
                <PrivateRoute path="/export" component={WikiExporter}/>
                <div className="w-100" style={{maxWidth: "400px"}}>
                  <Route path="/sign-up" component={Signup}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/forgot-password" component={ForgotPassword}/>
                  <Route path="/create" component={CreateCompany}/>
                </div>
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
      </>
  )
}

export default App;