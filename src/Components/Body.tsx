import { CgDisplayFlex, CgDisplayFullwidth } from "react-icons/cg";
import {
  RiReplay15Fill,
  RiReplay30Line,
  RiReplay5Line,
  RiReplay10Fill,
  RiPlayListLine,
} from "react-icons/ri";
import Form from "./Form";
import { Content } from "./Content";

const Body = () => {
  return (
    <div className="w-full mt-24 px-6 flex flex-col justify-start items-center">
      <Content />
      {/* <CgDisplayFlex />
      <CgDisplayFullwidth /> */}
      <div className="w-full flex flex-col gap-10">
        <Form />
        <h2 className="text-stone-200 text-2xl font-semibold font-sans">
          TuneUp
        </h2>
        {/* https://www.instagram.com/reel/Cg3otIug7oe/ */}
      </div>
    </div>
  );
};

export default Body;
