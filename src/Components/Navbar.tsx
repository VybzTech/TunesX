// import Logo from "./Logo.jsx";
import Logo from "../Images/VybzTech.png";
import {
  SiApplemusic,
  SiSoundcloud,
  SiYoutubemusic,
  SiInstagram,
  SiSpotify,
} from "react-icons/si";
import { SlSocialYoutube } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
import { PiTidalLogoLight, PiMonitorPlayFill } from "react-icons/pi";
import { TbBrandDeezer, TbPlayerPauseFilled } from "react-icons/tb";
import { RxInstagramLogo } from "react-icons/rx";
import { FaMixcloud } from "react-icons/fa";
import { IoPlayForwardCircleOutline, IoAdd } from "react-icons/io5";
import NavIcon from "./NavIcon";

const Navbar = () => {
  const socials = [
    { name: "Spotify", icon: <SiSpotify /> },
    { name: "Twitter X", icon: <RiTwitterXLine /> },
    { name: "Instagram", icon: <RxInstagramLogo /> },
    { name: "Tidal", icon: <PiTidalLogoLight /> },
    { name: "Apple Music", icon: <SiApplemusic /> },
    { name: "Soundcloud", icon: <SiSoundcloud /> },
    { name: "Youtube", icon: <SlSocialYoutube /> },
    { name: "Deezer", icon: <TbBrandDeezer /> },
    { name: "MixCloud", icon: <FaMixcloud /> },
    { name: "Youtube Music", icon: <SiYoutubemusic /> },
  ];

  return (
    <div className="Navbar px-4 py-8 pb-10 flex flex-col gap-12">
      <div className="logo flex gap-2 items-center justify-center">
        <img className="w-10" src={Logo} alt="Logo" />
        {/* <Logo /> */}
        <span className="hidden md:block text-white text-xl font-semibold font-sans">
          TunesX
        </span>
      </div>
      {/* SOCIALS */}
      <div className="flex flex-col gap-3 items-center justify-center">
      {socials?.map((social,id) => {
          return <NavIcon key={id} name={social.name} icon={social.icon} />;
        })}
        </div>
      <NavIcon name={"New"} icon={<IoAdd />} />
      <p className="text-xs text-stone-600 text-center">&copy; VybzTech</p>
    </div>
  );
};

export default Navbar;
