import ReactGA from "react-ga"

const TRACKING_ID = "UA-334511237-X"

function init() {
    // Enable debug mode on the local development environment
    const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ReactGA.initialize(TRACKING_ID, { debug: isDev })
}

function sendEvent(payload: any) {
    ReactGA.event(payload)
}

function sendPageview(path: string) {
    ReactGA.set({ page: path })
    ReactGA.pageview(path)
}

export default {
    init,
    sendEvent,
    sendPageview,
}