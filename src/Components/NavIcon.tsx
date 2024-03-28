import React from "react";
type NavIconProps = { name: string; icon: React.FunctionComponent };

const NavIcon = ({ name, icon }: NavIconProps) => {
  return (
    <div className="navIcon trans">
      <span className="text-stone-500 [&>svg]:w-9 [&>svg]:h-9 trans">
        <>{icon}</>
      </span>
      <p className="text-[0.7rem] text-stone-700 font-semibold text-center trans">{name}</p>
    </div>
  );
};

export default NavIcon;
