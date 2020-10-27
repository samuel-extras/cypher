import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
    },
    duration: {
        fontSize: 12,
    },
    playBtn: {
        border: `2px solid ${theme.palette.text.light}`,
        transition: "0.7s",

        "&:hover": {
            borderColor: theme.palette.contrast,
        },
    },
}));

export { useStyles };
