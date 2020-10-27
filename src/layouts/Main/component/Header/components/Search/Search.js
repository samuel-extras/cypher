import React from "react";
import { useStyles } from "./style";
import { Fragment } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Typography } from "@material-ui/core";

const Search = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.action}>
        <SearchIcon />
        <Typography variant="inherit" className={classes.typo} component="span">
          {" "}
          Search
        </Typography>
      </div>
    </Fragment>
  );
};

export default Search;
