import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import { useStateValue } from './context/StateProvider';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    console.log('am inside app.js');
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log('onAuthStateChanged');
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });

    return () =>{
      console.log('am inside unsubscribe');
      unsubscribe();
    }
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/returns-orders">
            <h1>Orders</h1>
          </Route>
          <Route path="/checkout">
            <Header />
            <div className="checkout">
              <Checkout />
            </div>
          </Route>
          <Route path="/prime">
            <h1>Prime</h1>
          </Route>
          <Route path="/">
            <Header />
            <HeroBanner />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
