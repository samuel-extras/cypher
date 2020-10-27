import React, { useState, Fragment } from "react";
import AudioCard from "../AudioCard";
import { Box, Typography, ClickAwayListener } from "@material-ui/core";
import Slider from "react-slick";
import settings from "./Settings";
import { useStyles } from "./style";
import { AudioOptions } from "..";

const AudioCategory = ({ title }) => {
  const [state] = useState({
    audios: [1, 2, 3, 4, 4, 5, 5, 5],
    loading: false,
    hasError: false,
  });

  const { audios } = state;
  const classes = useStyles();
  const [menu, setMenu] = useState(null);

  console.log(menu);

  return (
    <Box className={classes.root}>
      <Typography variant="h1" className={classes.text}>
        {title}
      </Typography>
      <Slider {...settings}>
        {audios.map((audio, i) => (
          <Fragment key={i}>
            
              <ClickAwayListener onClickAway={() => setMenu(null)}>
                <div>
                  <AudioOptions />
                </div>
              </ClickAwayListener>
            <AudioCard openMenu={() => setMenu(i)} {...audio} />
          </Fragment>
        ))}
      </Slider>
    </Box>
  );
};

export default AudioCategory;
