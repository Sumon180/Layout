import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { MenuItems } from "../../types/type";
import Icons from "../ui/Icons";

interface NavmenuProps {
  menus: MenuItems[];
  menuHover: boolean;
}

const Navmenu: React.FC<NavmenuProps> = ({ menus, menuHover }) => {
  const isToggled = useSelector((state: RootState) => state.toggle.isToggled);

  return (
    <ul className=" mt-12">
      {menus.map((item, i) => (
        <li
          key={i}
          className={`relative ${isToggled ? "h-12 w-full" : "h-12 w-12"}`}
        >
          <Link
            to="/apps"
            className={`menu-link flex items-center gap-3 text-slate-600 font-medium text-sm capitalize px-[10px] py-3 rounded-[4px] cursor-pointer`}
          >
            <span className="menu-icon flex-grow-0 icon-box inline-flex items-center text-slate-600 text-lg ltr:mr-3 rtl:ml-3">
              <Icons icon={item.icon} />
            </span>
            <div className={`${isToggled || menuHover ? "block" : "hidden"}`}>
              {item.title}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navmenu;
