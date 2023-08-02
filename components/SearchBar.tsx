import { HiSearch } from "react-icons/hi";

const SearchBar = () => {
    return ( 
        <div className="flex items-center justify-center pt-5 w-screen">
        <input
          className="text-black p-4 rounded-full md:w-1/3 w-full items-center translate-y-2"
          type="text"
          required
          placeholder="Search Kittens, Siamese, etc."
        />

        <button
          className="hidden md:flex bg-cyan-600 hover:bg-cyan-700 items-center ml-2 p-4 text-white font-bold rounded-full mt-5"
          onClick={() => {}}
        >
          <HiSearch size={25} />
        </button>
      </div>
     );
}
 
export default SearchBar;