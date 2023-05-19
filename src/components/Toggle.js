import { useTheme } from "next-themes";
import React from "react";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";

const Toggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="flex gap-5 text-4xl dark:text-darkMode-txt cursor-pointer">
        {theme === "dark" ? (
          <BsToggle2Off onClick={() => setTheme("light")} />
        ) : (
          <BsToggle2On onClick={() => setTheme("dark")} />
        )}
      </div>
    </>
  );
};

export default Toggle;
