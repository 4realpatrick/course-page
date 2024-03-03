import Tag from "@/components/tag";

const Card2 = () => {
  return (
    <div
      className="flex flex-col justify-between px-10 py-9 bg-neutral-800 space-y-4 rounded-2xl w-[30%] hover:translate-x-2 hover:-translate-y-2 transition-transform translate-x-0 translate-y-0 after:absolute after:inset-0 after:translate-z-[-4px,_4px,_-1px] after:bg-gradient-to-b after:from-blue-500 after:to-red-500 after:rounded-2xl after:transition-all after:opacity-0 hover:after:opacity-100 after:z-[3] shrink-0"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="space-y-6">
        <div className="text-[#f2f2f2]">Moonshot 2023 Summer Hackathon</div>
        <div className="flex gap-6 flex-wrap">
          <Tag>All Tracks</Tag>
          <Tag>Solidity</Tag>
          <Tag>ZK</Tag>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex border-b border-b-gray-500 pb-2 justify-between">
          <div className="text-gray-500">Signup</div>
          <div className="text-white">4/15 - 6/15</div>
        </div>
        <div className="flex border-b border-b-gray-500 pb-2 justify-between">
          <div className="text-gray-500">Event</div>
          <div className="text-white">6/15 - 7/15</div>
        </div>
        <div className="flex border-b border-b-gray-500 pb-2 justify-between">
          <div className="text-gray-500">Grant size</div>
          <div className="text-white">200k</div>
        </div>
      </div>
      <div className="absolute left-0 right-0 h-10 top-1/4 z-[2]">
        <div className="absolute size-10 bg-neutral-950 -left-5 rounded-full"></div>
        <div className="absolute size-10 bg-neutral-950 -right-5 rounded-full"></div>
      </div>
    </div>
  );
};

export default Card2;
