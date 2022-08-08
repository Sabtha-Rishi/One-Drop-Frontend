import React, { useState } from "react";
import NavBar from "./navbar";
import styled from "styled-components";
import Sidebar from "./sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const toggleSidebar = () => {
  setIsSidebarOpen((prev) => !prev);
};

  return (
    <HeaderCont>
      <NavBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
    </HeaderCont>
  );
};

//  CSS STYLING

const HeaderCont = styled.nav`
  position: sticky;
  top: 0;
`;
export default Header;
