import React, { Fragment, useState } from "react";
import { Header, Sidebar, Player } from "./component";
import { styled } from "@material-ui/styles";

const MainTag = ({ children, ...rest }) => <main {...rest}>{children}</main>;

const MainWrapper = styled(MainTag)(({ theme }) => ({
  width: "95%",
  margin: "auto",
  marginTop: theme.spacing(8),

  "& .slick-next, & .slick-prev": {
    width: 40,
    height: `40px !important`,
    zIndex: `1 !important`,

    "&::before": {
      fontSize: 38,
      transition: "0.5s",

      [theme.breakpoints.down("xs")]: {
        fontSize: 22,
      }
    },

    "&:hover": {
      "&::before": {
        color: `${theme.palette.primary.main} !important`,
      },
    },
  },

  "& .slick-prev": {
    left: -12,

    "&::before": {
      content: `"\f111" !important`,
    },
  },

  "& .slick-next": {
    right: -20,

    "&::before": {
      content: `"\f112" !important`,
    },
  },

  [theme.breakpoints.down("xs")]: {
    marginTop: 120,
    width: "100%",
  },
}));

const Main = ({ children }) => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleSideBarToggle = (val) => setOpenSideBar(val);

  return (
    <Fragment>
      <Header openSideBar={() => setOpenSideBar(true)} />
      <Sidebar open={openSideBar} toggle={handleSideBarToggle} />
      <MainWrapper>{children}</MainWrapper>
      <Player />
    </Fragment>
  );
};

export default Main;
