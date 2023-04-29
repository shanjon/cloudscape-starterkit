// Elements, Hooks
import logo from './logo.svg';
import './App.css';
import { Route, Routes, useParams, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router";

// Components
import Homepage from './pages/Homepage/Homepage';
import TableView from './pages/TableView/TableView';

// Styles
import "@cloudscape-design/global-styles/index.css"

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/tableview" element={<TableView />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
