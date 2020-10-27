import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  drawer: {
    width: 260,
    [theme.breakpoints.up("md")]: {
      marginTop: 64,
      height: "calc(100% - 64px)",
    },
  },
}));

export { useStyles };
