import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Read from "./components/Read";
import Write from "./components/Write";
import Get from "./components/Get";
import Update from "./components/Update";
import Delete from "./components/Delete";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <span className="button"><Link to="/get">Get data from Server</Link></span>
          <br/><br/>
          <span className="button"><Link to="/read">Read from Database</Link></span>
          <br/><br/>
          <span className="button"><Link to="/write">Write to Database</Link></span>
          <br/><br/>
          <span className="button"><Link to="/update">Update Database</Link></span>
          <br/><br/>
          <span className="button"><Link to="/delete">Delete from Database</Link></span>
        </div>
        <p>Hello dude</p>
      </div>
      <Routes>
        <Route path="/get" element={<Get />}/>
        <Route path="/read" element={<Read />}/>
        <Route path="/write" element={<Write />}/>
        <Route path="/update" element={<Update />}/>
        <Route path="/delete" element={<Delete />}/>
      </Routes>
    </Router>
  );
}

export default App;