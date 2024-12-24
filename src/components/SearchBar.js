import React from 'react';

const SearchBar = ({ search, setSearch, onClick }) => {
    return (
        <div className="relative max-w-[600px] pb-8">
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-2 pl-8 h-12 border border-gray-100 rounded-l-md outline-none w-full text-sm"
            />
            <span className="absolute left-[10px] top-[15px]">
                <svg
                    className="w-4 h-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </span>
            <button onClick={onClick} className="bg-blue-600 text-white px-4 py-2 rounded-r-md text-sm font-medium absolute right-0 h-12">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
