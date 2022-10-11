import React from 'react';
import './App.css';
import AllRoutes from "./Routes/Routes";
import useGoogleAnalytics from "./Analytics/useGoogleAnalytics";

function App() {
    useGoogleAnalytics()
    return (
        <div className="app_box">
            <AllRoutes/>
        </div>
    );
}

export default App;
