import logo from './logo.svg';
import './App.css';
import HomePage from "./layouts/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/home.scss";
import history from "./util/history";
import { Router } from 'react-router';


function App() {
  return (
    <Router history={history}>
      <HomePage />
    </Router>
  );
}

export default App;
