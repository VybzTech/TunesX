import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { usePlatform } from "../Context/Platform";
import { PiTidalLogoLight, PiMonitorPlayFill } from "react-icons/pi";
import { TbBrandDeezer, TbPlayerPauseFilled } from "react-icons/tb";
import { TbBrandGooglePlay } from "react-icons/tb";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { HiPlay } from "react-icons/hi2";
// import { TbBrandGooglePlay } from "react-icons/tb";


const Form: React.FC = () => {
  const [content, set] = useState<string>("");
  const [placehold, setPlaceHold] = useState<string>(
    "Select a platform & paste content link"
  );
  const { platform, setPlatform } = usePlatform();

  useEffect(() => {
    console.log(platform);
    platform !== "" &&
      setPlaceHold(
        `Paste the link to the ${platform} content you want to TuneUp`
      );
    // return () => {
    // }
  }, [platform]); 
  return (
    <div className="Form">
      {/* <h3 className="text-white text-3xl tracking-tight">
        Join our <span className="text-blue-600 font-bold">Team</span> ❗
      </h3> */}
      <form className="mt-6 sm:mt-9">
        <div className="flex gap-4">
          <Input value={content} setter={set} placeholder={placehold} />
          <button className="trans btn [&>svg]">
            <HiPlay />
          </button> 
        </div>
        
      </form>
    </div>
  );
};

export default Form;
