import './App.css'
import {Route, Routes} from "react-router-dom";
import Homepage from './pages/home-page/Homepage';
import UserDashboard from './pages/user-dashboard-page/UserDashboard';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<UserDashboard />} />
        </Routes>
    )
}

export default App
