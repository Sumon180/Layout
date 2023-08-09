import { RootState } from "../../app/store";
import logo from "../../assets/images/app-logo.svg";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isToggled = useSelector((state: RootState) => state.toggle.isToggled);

  return (
    <div
      className={`transition-all duration-500 ${
        isToggled ? "w-[200px]" : "w-[73px]"
      } fixed border-r h-screen p-4`}
    >
      <div className="flex items-center gap-3 text-2xl font-semibold">
        <img className="mx-auto h-10 w-10" src={logo} alt="logo" />
        <h1
          className={`transition-all duration-500 ${
            isToggled ? "block" : "hidden"
          }`}
        >
          Dashboard
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
