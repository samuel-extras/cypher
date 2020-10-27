import { makeStyles, styled } from "@material-ui/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  siteName: {
    color: theme.palette.white,
  },
  toolbar: {
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 1, 0, 0),
    },
  },
  navigationBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-between",
    },
  },
  flexGrow: {
    flexGrow: 1,
  },
}));

const MyLink = styled(NavLink)(({ theme, activeClassName, lessMargin }) => ({
  margin: theme.spacing(0, lessMargin ? 1 : 3),
  color: theme.palette.text.light,
  fontWeight: "bold",
  "&:hover": {
    color: theme.palette.white,
  },

  ["&." + activeClassName]: {
    color: theme.palette.white,
  },

  [theme.breakpoints.down("xs")]: {
    margin: theme.spacing(0, 1),
    fontSize: 13
  },
}));

export { useStyles, MyLink };
