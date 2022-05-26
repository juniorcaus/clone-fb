import React, { useContext } from "react";
import StoryCard from "../StoryCard";
import * as C from "./styles";

import jr from "../../imagens/jr.jpg";
import bezos from "../../imagens/bezos.jpg";
import bill from "../../imagens/bill.jpg";
import mark from "../../imagens/mark.jpg";
import elon from "../../imagens/elon.jpg";
import { AuthContext } from "../../contexts/auth";

const Stories = () => {
    const { user } = useContext(AuthContext);

    const itens = [
        { src: jr, profile: jr, name: user.name },
        { src: bezos, profile: bezos, name: "Jeff Bezoz" },
        { src: bill, profile: bill, name: "Bill Gates" },
        { src: mark, profile: mark, name: "Mark Zuckerberg" },
        { src: elon, profile: elon, name: "Elon Musk" },
      ];

  return (
    <C.Container>
         {itens.map((item, index) => (
        <StoryCard
          key={index}
          src={item.src}
          name={item.name}
          profile={item.profile}
        />
      ))}
    </C.Container>
  )
}

export default Stories;