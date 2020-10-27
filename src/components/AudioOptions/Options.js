import React from "react";
import MenuList from "../MenuList";
import items from "./options-data";
import DropdownBox from "../DropdownBox";

const Options = () => {
    return (
        <DropdownBox style={{ width: 200, bottom: 45, top: "auto", right: 5 }}>
            <MenuList items={items} />
        </DropdownBox>
    );
};

export default Options;
