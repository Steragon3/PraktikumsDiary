import logo from './logo.svg';
import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen  from './components/HomeScreen/HomeScreen'
import DiaryScreen  from './components/DiaryScreen/DiaryScreen'
import Menu from './components/Menu/Menu'
function App() {
  return (
    <div className={"app-container"}>

    <Router >
      <Menu></Menu>
      <Switch>
        <Route path='/diary' component={DiaryScreen} />
        <Route path='/' component={HomeScreen} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
