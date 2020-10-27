import { styled } from "@material-ui/styles";
import { Box } from "@material-ui/core";

const BaseLoader = styled(Box)(({ theme }) => ({
    width: "100%",
    height: 2,
    background: theme.palette.text.light,

    "& div": {
        background: theme.palette.contrast,
        height: "100%",
        width: "30%",
        transition: "0.7s",
    },
}));

export { BaseLoader };
