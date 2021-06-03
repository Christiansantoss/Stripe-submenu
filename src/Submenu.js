import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubMenuOpen,
    location,
    page: { page, links },
    // two values getting from state
  } = useGlobalContext();
  const container = useRef(null);
  //  adjusting columns based on how many links are in submenu
  const [columns, setColumns] = useState("col-2");
  // everytime location changes run useEffect
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    // get center and bottom from location context
    const { center, bottom } = location;
    // holds node
    // styling for submenu mouse on top of button location changes nicely
    // dynamically checking values for button and when value changes changing location of submenu
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);

  return (
    <aside
      className={`${isSubMenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
