'use client'

import { useState } from 'react';
const DropDown = () => {
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [pageCount, setPageCount] = useState(30);
  const authors = ['Tekijä 1', 'Tekijä 2', 'Tekijä 3']; // Replace with your actual list
  return (
    <div className="flex justify-between items-center">
      {/* Author Dropdown */}
      <div className="relative inline-block w-64">
        <select
          value={selectedAuthor}
          onChange={(e) => setSelectedAuthor(e.target.value)}
          className="block w-full appearance-none bg-white border border-gray-300 text-gray-900 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          <option value="">Tekijän mukaan</option>
          {authors.map((author, index) => (
            <option key={index} value={author}>
              {author}
            </option>
          ))}
        </select>
      </div>
      {/* Page Count Dropdown */}
      <div className="relative inline-block w-8">
        <select
          value={pageCount}
          onChange={(e) => setPageCount(parseInt(e.target.value))}
          className="block w-8 appearance-none bg-white border border-gray-300 text-gray-900 p-1  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          {[10, 20, 30, 40, 50].map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default DropDown;