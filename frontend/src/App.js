import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllNotes from './components/AllNotes';
import NotesBySem from './components/NotesBySem';
import UploadNotes from './components/UploadNotes';
import NoteState from './context/notes/NoteState';
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
          <NoteState>
            <AllNotes />
          </NoteState>
          </Route>
          <Route exact path = '/notesBySem'>
            <NotesBySem />
          </Route>
          <Route exact path = '/contactUs'>
            <ContactUs />
          </Route>
          <Route exact path = '/uploadNotes'>
            <UploadNotes />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
