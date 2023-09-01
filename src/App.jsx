import Nav from "./components/Nav";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useEffect } from "react";
import MainPage from "./pages/MainPage";

export default function App() {
  const [isDark, setIsDark] = useLocalStorage(false, "darkmode");
  useEffect(
    function () {
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [isDark]
  );
  return (
    <main className="relative dark:bg-black">
      <Nav />
      <MainPage />
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
    </main>
  );
}
