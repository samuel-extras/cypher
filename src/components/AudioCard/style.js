import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {console.log(theme);return ({
    root: {
        width: "100%",
        maxWidth: 280,
        display: "flex",
        flexDirection: "column",
        padding: 8,

        "& > h3": {
            [theme.breakpoints.down("xs")]: {
                fontSize: 16,
            },
        },

        "& > span": {
            fontSize: 14,
            color: theme.palette.text.light,
        },

        "&:hover": {
            "& .show-icon": {
                display: "block",
            },
        },


        [theme.breakpoints.down("md")]: {
            maxWidth: 230,
            maxHeight: 230,
        },

        "@media screen and (max-width: 1033px)": {
            maxWidth: 280,
            maxHeight: 280,
        },

        [theme.breakpoints.down("sm")]: {
            maxWidth: 190,
            maxHeight: 190,
        },
 
        "@media screen and (max-width: 870px)": {
            maxWidth: 220,
            maxHeight:220,
        },

        "@media screen and (max-width: 752px)": {
            maxWidth: 200,
            maxHeight:200,
        },

        "@media screen and (max-width: 692px)": {
            maxWidth: 190,
            maxHeight:190,
        },

        "@media screen and (max-width: 657px)": {
            maxWidth: 170,
            maxHeight:170
        },

        [theme.breakpoints.down("xs")]: {
            maxWidth: 100,
            maxHeight:100,
        },
    },
    top: {
        width: "100%",
        maxHeight: 180,
        height: 180,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: theme.spacing(1),
        overflow:"hidden",

        [theme.breakpoints.down("xs")]: {
            height: 120,
        },
    },
    moreBtn: {
        position: "absolute",
        top: 0,
        right: 0,
        animation: `$slideInUp 0.5s linear`,
        color: theme.palette.white,
        display: "none",
    },
    more:{
        
        marginTop:300,
        display: "inline-block",
    },
    thumbnail: {
        width: "100%",
        maxHeight: "100%",
        height: "100%",
        borderRadius: 3,
        backgroundRepeat: "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        transition: "0.6s",

        "&:hover": {
            opacity: 0.5,
        },
    },
    playBtn: {
        position: "absolute",
        top: 50,
        left: 120,
        fontSize: 48,
        color: theme.palette.white,
    },
    "@keyframes slideInUp": {
        "0%": {
            opacity: 0,
            transform: `translateY(-100px)`,
        },
        "100%": {
            opacity: 1,
            transform: `translateY(0)`,
        },
    },
})});

export { useStyles };
