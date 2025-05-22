import { Search } from "lucide-react";

function CommonSearch() {
  return (
    <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto mt-12">
      <div className="border-b border-white/50 flex items-center gap-3 px-2 py-2">
        <Search className="text-white h-5 w-5" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full text-white placeholder-white/70 outline-none text-sm md:text-base"
        />
      </div>
    </div>
  );
}

export default CommonSearch;
