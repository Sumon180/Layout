import { RootState } from "../../app/store";
import logo from "../../assets/images/app-logo.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navmenu from "./Navmenu";
import { menuItems } from "../../data";
import { useState } from "react";

const Sidebar = () => {
  const isToggled = useSelector((state: RootState) => state.toggle.isToggled);
  const [menuHover, setMenuHover] = useState(false);

  return (
    <div
      className={`transition-all duration-300 ease-in-out bg-white overflow-hidden ${
        isToggled ? "w-[250px]" : "w-[73px]"
      } fixed border-r h-screen p-4  ${menuHover ? "!w-[250px] z-10" : "z-10"}`}
      onMouseEnter={() => {
        setMenuHover(true);
      }}
      onMouseLeave={() => {
        setMenuHover(false);
      }}
    >
      <Link to="/home">
        <div className="flex items-center gap-3">
          <img className="h-10 w-10" src={logo} alt="logo" />
          <h1
            className={`transition-all duration-300 text-2xl font-semibold ${
              isToggled ? "block" : "hidden"
            } ${menuHover ? "!block z-10" : "z-10"}`}
          >
            Dashboard
          </h1>
        </div>
      </Link>
      <Navmenu menus={menuItems} menuHover={menuHover} />
    </div>
  );
};

export default Sidebar;
