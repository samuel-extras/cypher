import React from "react";
import { styled, Box } from "@material-ui/core";

const Content = styled(Box)(({ theme }) => ({
    borderRadius: 0,
    width: "100%",
    position: "absolute",
    right: 0,
    background: `rgba(9, 14, 57, 0.75)`,
    border: `1px solid ${theme.palette.text.light}`,
}));

const DropdownBox = ({ children, ...rest }) => (
    <Content {...rest}>{children}</Content>
);

export default DropdownBox;
