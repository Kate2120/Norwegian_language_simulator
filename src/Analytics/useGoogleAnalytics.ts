import React from "react"
import { useLocation } from "react-router-dom";
import analytics from "./Analytics";

export default function useGoogleAnalytics() {
    const location = useLocation()
    console.log(location);

    React.useEffect(() => {
        analytics.init()
    }, [])

    React.useEffect(() => {
        const currentPath = location.pathname + location.search
        analytics.sendPageview(currentPath)
    }, [location])
}
