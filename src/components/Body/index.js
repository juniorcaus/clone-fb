import React from "react";
import Shortcuts from "../Shortcuts";
import * as C from "./styles";

import Contacts from "../Contacts";
import Feed from "../Feed";


const Body = () => {
  return (
    <C.Container>
        <Shortcuts />
        <Feed/>
        {/* <NewPost /> */}
        <Contacts />
    </C.Container>
  );
};

export default Body;