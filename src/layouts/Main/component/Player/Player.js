import React from "react";
import { Actions, Loader, Detail, Controls } from "./components";
import { useStyles } from "./style";
import { Hidden } from "@material-ui/core";

const Player = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Loader />
            <div className={classes.wrapper}>
                <Detail />
                <Controls />
                <Hidden xsDown>
                    <Actions />
                </Hidden>
            </div>
        </div>
    );
};

export default Player;
