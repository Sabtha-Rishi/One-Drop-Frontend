import React, { useState } from "react";
import NavBar from "./navbar";
import styled from "styled-components";
import Sidebar from "./sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  

  return (
    <HeaderCont>
      <NavBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      {isSidebarOpen && <Sidebar />}
    </HeaderCont>
  );
};

//  CSS STYLING

const HeaderCont = styled.nav`
  position: sticky;
  top: 0;
`;
export default Header;
