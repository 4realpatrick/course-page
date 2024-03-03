import Tag from "@/components/tag";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineMenuBook } from "react-icons/md";

const Card3 = () => {
  return (
    <div
      className="relative bg-neutral-800 rounded-2xl w-[30%] hover:translate-x-2 hover:-translate-y-2 transition-transform translate-x-0 translate-y-0 before:absolute before:top-[25px] before:right-0 before:bg-neutral-800 before:size-[15px] before:rounded-tr-2xl before:shadow-[2px_-5px_0_2px_rgb(10_10_10)] after:absolute after:inset-0 after:translate-z-[-4px,_4px,_-1px] after:bg-gradient-to-b after:from-amber-500  after:to-purple-500 after:rounded-2xl after:transition-all after:opacity-0 hover:after:opacity-100 after:z-[3] shrink-0"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="rounded-br-lg h-[30px] w-[200px] bg-neutral-950 relative before:absolute before:size-[26px] -top-1 rounded-tl-lg -right-[70%] before:-left-2 before:top-1 before:bg-neutral-800 before:rounded-tr-xl"
        style={{ transform: "skew(40deg)" }}
      ></div>
      <div className="px-10">
        <div className="h-1 w-10 rounded-md bg-blue-400" />
        <div className="pt-6 space-y-4">
          <div className="text-white">Web 3.0 Programming Basics</div>
          <Tag>Beginner</Tag>
          <p className="text-gray-500">
            Basic concepts in programming of Solidity. Topics include:
            variables, functions, flow control, error handling, data structure.
          </p>
        </div>
        <div className="flex pt-8 items-center gap-4 lg:gap-6 text-background flex-wrap">
          <div className="flex items-center shrink-0">
            <CiClock2 className="size-6 mr-2" /> 36 Hour
          </div>
          <div className="flex items-center shrink-0">
            <MdOutlineMenuBook className="size-6 mr-2" />5 Course
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
