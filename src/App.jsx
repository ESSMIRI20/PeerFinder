import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Profile from './profile';
import JoinTeam from './Join-Team';
import CreateTeam from './Create-Team';
import About from './About';
import Home from './Home';
import FortyTwoProfile from './data_fetch';

function App() {
  return (
    <Router>
      {/* <FortyTwoProfile/> */}
      <header className="navbar">
        <div className="logo">
          <span className="logo-tp">TP</span>
          <span>Finder</span>
        </div>
        <nav>
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Join-Team">Join Team</Link></li>
            <li><Link to="/create-Team">create Team</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create-Team" element={<CreateTeam />} />
          <Route path="/Join-Team" element={<JoinTeam />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
