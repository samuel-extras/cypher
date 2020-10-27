import React from "react";
import { AudioCategory } from "../../components";
import { Fragment } from "react";

const Home = () => {
    return (
        <Fragment>
            <AudioCategory title="Recommended Music" />
            <AudioCategory title="Live Performance" />
        </Fragment>
    );
};

export default Home;
