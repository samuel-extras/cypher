import React from "react";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import LoopIcon from "@material-ui/icons/Loop";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import { IconButton } from "@material-ui/core";
import More from "./components/More/More";

const Actions = () => (
    <div>
        <IconButton>
            <VolumeUpIcon />
        </IconButton>
        <IconButton>
            <LoopIcon />
        </IconButton>
        <IconButton>
            <ShuffleIcon />
        </IconButton>
        <More />
    </div>
);

export default Actions;
