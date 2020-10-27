import React from "react";
import { Avatar } from "@material-ui/core";
import { useStyles } from "./style";

const Detail = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar>E</Avatar>
            <div>
                <span className="title">Fall</span>
                <span className="subtitle">Eminem</span>
            </div>
        </div>
    );
};

export default Detail;
