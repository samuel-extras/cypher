import React, { useState, Fragment, } from "react";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "./style";
import { AudioOptions } from "../../../../../../../../components";
import { Box, IconButton, ClickAwayListener } from "@material-ui/core";

const More = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <Box className={classes.more}>
      <IconButton onClick={() => setOpen(!open)}>
        <MoreIcon />
      </IconButton>
      
      <Fragment>
      {open&&(
          <ClickAwayListener onClickAway={() => setOpen(false)}>
          <div>
          <AudioOptions />
          </div>
          </ClickAwayListener>)
        }
          </Fragment>
    </Box>
  );
};

export default More;
