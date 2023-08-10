import { FC, ReactNode } from "react";
import Topbar from "../header";
import Sidebar from "../sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Footer from "../footer";

interface layoutProps {
  children: ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
  const isToggled = useSelector((state: RootState) => state.toggle.isToggled);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow justify-end bg-slate-100">
        <Topbar />
        <div
          className={`transition-all duration-300  ${
            isToggled ? "ml-72" : "ml-28"
          } mt-20`}
        >
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
