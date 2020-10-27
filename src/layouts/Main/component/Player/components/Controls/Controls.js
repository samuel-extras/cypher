import React from "react";
import { IconButton, Hidden } from "@material-ui/core";
import PrevIcon from "@material-ui/icons/SkipPrevious";
import NextIcon from "@material-ui/icons/SkipNext";
import PlayIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import { useStyles } from "./style";

const Controls = () => {
  const classes = useStyles();

  const isPlaying = false;
  return (
    <div className={classes.root}>
      <IconButton>
        <PrevIcon />
      </IconButton>
      <IconButton className={classes.playBtn}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </IconButton>
      <IconButton>
        <NextIcon />
      </IconButton>
      <Hidden xsDown>
        <div className={classes.duration}>0:15 / 5:12</div>
      </Hidden>
    </div>
  );
};

export default Controls;
