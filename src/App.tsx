import './App.css'
import { Route, Routes } from "react-router-dom";
import Homepage from './pages/home-page/Homepage';
import UserDashboard from './pages/user-dashboard-page/UserDashboard';
import { CardSearchProvider } from './helpers/MTGContext';

function App() {
    return (
        <>
            <CardSearchProvider>
                <Routes>
                    <Route path={"/"} element={<Homepage />} />
                    <Route path={"/user-dashboard"} element={<UserDashboard />} />
                </Routes>
            </CardSearchProvider>
        </>
    )
}

export default App
