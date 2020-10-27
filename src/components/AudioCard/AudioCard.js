import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import Thumbnail from "../../assets/img/lovethestars.jpg";
import MoreIcon from "@material-ui/icons/MoreVert";
import PlayIcon from "@material-ui/icons/PlayArrow";
import { useStyles } from "./style";

const AudioCard = ({ openMenu }) => {
  const classes = useStyles();

  return (
    <div>
      <div
        className={classes.root}
        onContextMenu={(e) => {
          e.preventDefault();
          openMenu();
        }}
      >
        <div className={classes.top}>
          <div
            className={classes.thumbnail}
            alt="..."
            style={{ backgroundImage: `url(${Thumbnail})` }}
          />
          <IconButton
            className={`${classes.moreBtn} show-icon`}
            onClick={openMenu}
          >
            <MoreIcon />
          </IconButton>
          <IconButton className={`${classes.playBtn} show-icon`}>
            <PlayIcon style={{ fontSize: "inherit" }} />
          </IconButton>
        </div>
        <Typography variant="h3" className={classes.title}>
          No Love
        </Typography>
        <span className={classes.subtitle}>Eminem</span>
      </div>
    </div>
  );
};

export default AudioCard;
