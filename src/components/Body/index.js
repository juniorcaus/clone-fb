import React from "react";
import Shortcuts from "../Shortcuts";
import * as C from "./styles";

import Contacts from "../Contacts";


const Body = () => {
  return (
    <C.Container>
        <Shortcuts />
        <Contacts />
    </C.Container>
  );
};

export default Body;