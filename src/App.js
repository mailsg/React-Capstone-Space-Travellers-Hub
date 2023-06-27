import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
