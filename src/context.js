import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  // set to false for sidebaropen so you cant see it with max width screen hidden
  //   able to view with min width small screen size
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  const openSubMenu = (text, coordinates) => {
    //   find method get me page that comes from button
    //   if text that is coming from button matches my page value from data thats the page
    const page = sublinks.find((link) => link.page == text);
    setPage(page);
    setLocation(coordinates);
    setIsSubMenuOpen(true);
  };
  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        openSideBar,
        closeSideBar,
        isSubMenuOpen,
        openSubMenu,
        closeSubMenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
// export { AppContext, AppProvider };
