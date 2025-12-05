import { useState } from "react";

function SearchBar({onSearch}) {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(search);
    }

    return(
        <form onSubmit={handleSubmit} className="flex justify-center gap-2">
            <input
                className="w-full rounded-md border-2 border-gray-300 px-4 py-2"
                type="text"
                placeholder="Search for recipes"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                className="bg-green-600 text-white rounded-md px-4 py-2"
                type="submit"
            >
                Search
            </button>
        </form>
    )
}

export default SearchBar;
