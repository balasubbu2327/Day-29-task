import { Routes, Route } from "react-router-dom";
import "./App.css";
import {Dashboard} from "./Dashboard";
import { Components } from "./Components";
import { Utilities } from "./Utilities";
import { Charts } from "./Charts";
import { Tables } from "./Tables";
import { Nav } from "./Nav";
import {Topnav} from "./Topnav";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 sidenav">
          <Nav />
        </div>
        <div className="col-lg-9 col-md-9">
          <div className="row"><Topnav /></div>
          <div className="row">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/components" element={<Components />} />
              <Route path="/utilities" element={<Utilities />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/tables" element={<Tables />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
