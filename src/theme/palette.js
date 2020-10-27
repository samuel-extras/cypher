import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#2b2e30";
const grey = "#4e558b";
const solid = "#090E39";
const light = "#777DA9";

export default {
    black,
    white,
    contrast: "purple",
    primary: {
        contrastText: white,
        dark: "#090E39",
        main: solid,
        light: "#1A2156",
    },
    secondary: {
        contrastText: white,
        dark: colors.blue[900],
        main: colors.blue["A400"],
        light: colors.blue["A400"],
    },
    success: {
        contrastText: white,
        dark: colors.green[900],
        main: colors.green[600],
        light: colors.green[400],
    },
    info: {
        contrastText: white,
        dark: colors.blue[900],
        main: colors.blue[600],
        light: colors.blue[400],
    },
    warning: {
        contrastText: white,
        dark: colors.orange[900],
        main: colors.orange[600],
        light: colors.orange[400],
    },
    error: {
        contrastText: white,
        dark: colors.red[900],
        main: colors.red[600],
        light: colors.red[400],
    },
    text: {
        primary: white,
        secondary: grey,
        link: solid,
        light: light,
    },
    background: {
        default: light,
        paper: solid,
    },
    icon: colors.blueGrey[600],
    divider: light,
};
