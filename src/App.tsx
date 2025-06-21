import './App.css'
import {useRoutes} from "react-router-dom";
import {routes} from "./routes/router.tsx";

function App() {
    return useRoutes(routes);
}

export default App
