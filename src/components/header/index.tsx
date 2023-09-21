import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggle } from "../../redux/layoutSlice";

const Topbar = () => {
  const isToggled = useSelector((state: RootState) => state.toggle.isToggled);
  const dispatch = useDispatch();

  return (
    <div
      className={`transition-all duration-300 ${
        isToggled ? "left-[15.54rem]" : "left-[4.54rem]"
      } fixed bg-white right-0 top-0   border-b h-16 flex items-center justify-between p-4`}
    >
      {/* Topbar content */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-5">
          <div className="flex items-center md:block">
            <button
              onClick={() => dispatch(toggle())}
              className="flex items-center"
            >
              {isToggled ? (
                <BsArrowLeft className="text-2xl" />
              ) : (
                <BsArrowRight className="text-2xl" />
              )}
            </button>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="border w-96 outline-none pl-4 py-1 rounded-md"
          />
        </div>
        <div className=" ">
          <h1>S</h1>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
