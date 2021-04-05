import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import LivePage from './components/dashboard/LivePage';
// import ViolationPage from './components/dashboard/ViolationPage';
import PastPage from './components/dashboard/PastPage';
import fbConfig from './config/fbConfig'
import ViolationPage from './components/dashboard/ViolationPage';

function App() {
  const [spells, setSpells] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = fbConfig.firestore();
      const data = await db.collection("spells").get();
      setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={LivePage} />
            <Route path='/pastPage' component={PastPage} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/violationPage' render={() => <ViolationPage spells={spells}/>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;
