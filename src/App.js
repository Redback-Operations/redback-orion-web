import Dashboard from "./Dashboard";
import Login from "./auth/Login";
import Register from "./auth/Register";
import CrowdStatistics from "./CrowdStatistics";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Airport from "./Airport";
import Railways from "./Railways";
import AboutComponent from "./About";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/crowd-stats" element={<CrowdStatistics />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/about" element={<AboutComponent />}></Route>

        <Route path="/market" element={<Dashboard />}></Route>
        <Route path="/supermarket" element={<Dashboard />}></Route>
        <Route path="/railway-station" element={<Railways />}></Route>
        <Route path="/malls" element={<Dashboard />}></Route>
        <Route path="/stadium" element={<Dashboard />}></Route>
        <Route path="/airport" element={<Airport />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
