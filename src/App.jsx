import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './components/Login';
import Users from './components/Users';
import { Header } from './components/Header';
import Register from './components/Register';

function App() {
  const [userName, setUserName] = useState('');

  return (
    <>
      <Header userName={userName} />
      <Switch>
        <Route exact path="/">
          <Login setUserName={setUserName} />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route> 
        <Route exact path="/users">
          <Users />
        </Route>
      </Switch>
    </>
  );
}

export default App;
