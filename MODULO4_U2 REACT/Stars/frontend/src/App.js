import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import ContactoPage from './pages/ContactoPage'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import LifePage from './pages/LifePage'
import SolarPage from './pages/SolarPage'
import GaleryPage from './pages/GaleryPage'

function App() {
  return (
    <Router>
     <Header/>
      <Nav/>
       <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/explore" exact component={ExplorePage} />
        <Route path="/galery" exact component={GaleryPage} />
        <Route path="/contacto" exact component={ContactoPage} />
        <Route path="/life" exact component={LifePage} />
        <Route path="/solar" exact component={SolarPage} />
        </Switch>
        <Footer/>
    </Router>

  );
}
