import Tag from "@/components/tag";
import { Button } from "@/components/ui/button";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineMenuBook } from "react-icons/md";

const Card4 = () => {
  return (
    <div
      className="px-10 py-9 bg-neutral-800 space-y-4 rounded-2xl w-[30%] hover:translate-x-2 hover:-translate-y-2 transition-transform translate-x-0 translate-y-0 after:absolute after:inset-0 after:translate-z-[-4px,_4px,_-1px] after:bg-gradient-to-b after:from-lime-500 after:to-rose-500 after:rounded-2xl after:transition-all after:opacity-0 hover:after:opacity-100 after:z-[3] shrink-0"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="h-1 w-10 rounded-md bg-blue-400" />
      <div className="text-[#f2f2f2]">Moonshot 2023 Summer Hackathon</div>
      <Tag>Beginner</Tag>
      <p className="text-gray-500">
        This course covers the most basic concepts in programming using Solidity
        as an example.
      </p>
      <div className="flex pt-8 items-center gap-4 lg:gap-6 text-background flex-wrap">
        <div className="flex items-center shrink-0">
          <CiClock2 className="size-6 mr-2" /> 36 Hour
        </div>
        <div className="flex items-center shrink-0">
          <MdOutlineMenuBook className="size-6 mr-2" />5 Course
        </div>
        <Button className="rounded-full text-[#9efa15]">
          <BiSolidPlaneAlt className="size-6 mr-2" />
          45% COMPLETED
        </Button>
      </div>
      <div className="absolute left-0 right-0 h-10 bottom-1/4 z-[2]">
        <div className="absolute size-10 bg-neutral-950 -left-5 rounded-full"></div>
        <div className="absolute size-10 bg-neutral-950 -right-5 rounded-full"></div>
      </div>
    </div>
  );
};

export default Card4;
