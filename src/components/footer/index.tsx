import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Footer = () => {
  const isToggled = useSelector((state: RootState) => state.toggle.isToggled);
  return (
    <div
      className={`transition-all duration-300 ${
        isToggled ? "ml-[15.54rem]" : "ml-[4.54rem]"
      } bg-white flex items-center justify-between p-4 border-t`}
    >
      Footer llllllllllllllllllllllllllllL
    </div>
  );
};

export default Footer;
