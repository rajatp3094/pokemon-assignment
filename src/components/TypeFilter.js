import React from 'react';

const TypeFilter = ({ types, selectedType, setSelectedType }) => {
    return (
        <div className="block w-full md:w-[400px] px-2 bg-white border border-gray-300 rounded-md shadow-sm mb-3">
            <select
                id="select-input"
                className="h-10 block md:w-[380px] w-full bg-white sm:text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
                onChange={(e) => setSelectedType(e.target.value)}
                value={selectedType}
            >
                {/* <option value="">Select Type</option> */}
                {types.map((val) => (
                    <option key={val.name} value={val.name}>
                        {val.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TypeFilter;
