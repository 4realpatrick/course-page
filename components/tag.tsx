const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-transparent border border-gray-300 py-1 px-3 rounded-full text-white text-xs w-fit shrink-0">
      {children}
    </div>
  );
};

export default Tag;
