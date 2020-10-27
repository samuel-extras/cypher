import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  action: {
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    color: theme.palette.text.light,
    margin: theme.spacing(0, 3),
    "&:hover": {
      color: theme.palette.white,
    },

    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(0, 1),
    },
  },
  typo: {
    margin: theme.spacing(0, 2),
    fontWeight: "bolder",

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

export { useStyles };
