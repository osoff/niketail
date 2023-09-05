import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

function DarkMode({ setIsDark, isDark }) {
  return (
    <div
      className="flex items-center justify-center fixed w-14 h-14 rounded-full bg-red-400 bottom-5 right-5  active:bg-red-500 cursor-pointer"
      onClick={() => setIsDark((mode) => !mode)}
    >
      {isDark ? (
        <BsFillMoonFill color="white" />
      ) : (
        <BsFillSunFill color="white" />
      )}
    </div>
  );
}

export default DarkMode;
