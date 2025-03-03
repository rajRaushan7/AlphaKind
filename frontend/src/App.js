import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllNotes from './components/AllNotes';
import NotesBySem from './components/NotesBySem';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path = '/'>
            <Home />
          </Route>
          <Route exact path = '/allNotes'>
            <AllNotes />
          </Route>
          <Route exact path = '/notesBySem'>
            <NotesBySem />
          </Route>
          <Route exact path = '/contactUs'>
            <ContactUs />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
