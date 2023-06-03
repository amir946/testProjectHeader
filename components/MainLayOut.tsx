"use client";

import { FC, useState } from "react";
import NavBar from "./common/navbar/NavBar";
import SearchBox from "./common/search/SearchBox";
import NavBarMain from "./common/navbarmain/NavBarMain";
import ContentProductMe from "./common/navbarmain/contentmenu/ContentProductMe";

const  MainLayOut:FC = ()=> {
  

  const [hover, setHover] = useState<boolean>(false);
  return (
    <>
      <NavBar />
      <br />
      <NavBarMain setHover={setHover}>
        <SearchBox setHover={setHover} />
        {hover ? <ContentProductMe /> : null}
      </NavBarMain>
    </>
  );
}
export default MainLayOut;


