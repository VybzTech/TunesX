import React from "react";
import { usePlatform } from "../Context/Platform";
type NavIconProps = { name: string; icon: React.FunctionComponent };

const NavIcon = ({ name, icon }: NavIconProps) => {
  const { platform, setPlatform } = usePlatform();

  const navAction = (str: string) => {
    // str!=="Add"
    setPlatform(str);
    console.log(str, "Str", platform, "platform");
  };

  return (
    // <div className="navIcon trans">
    <button className="navIcon trans" onClick={() => navAction(name)}>
      <span className="text-stone-500 [&>svg]:w-9 [&>svg]:h-9 trans">
        <>{icon}</>
      </span>
      <p className="text-[0.7rem] text-stone-700 font-semibold text-center trans">
        {name}
      </p>
    </button>
    // </div>
  );
};

export default NavIcon;
