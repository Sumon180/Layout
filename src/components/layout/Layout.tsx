import { FC, ReactNode } from "react";
import Topbar from "../header";
import Sidebar from "../sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface layoutProps {
  children: ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
  const isToggled = useSelector((state: RootState) => state.toggle.isToggled);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow justify-end">
        <Topbar />
        <div
          className={`transition-all duration-500 ${
            isToggled ? "ml-56" : "ml-24"
          } mt-20`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
