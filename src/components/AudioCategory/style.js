import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "32px 0px",
  },
  text:{
    margin: "32px 0px",
    [theme.breakpoints.down("xs")]: {
        fontSize: 20,
        marginBottom:10,
      }

  }
}));

export { useStyles };
