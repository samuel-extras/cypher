import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";

import theme from "./theme";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./assets/css/style.css";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes />
            </Router>
        </ThemeProvider>
    );
}

export default App;
