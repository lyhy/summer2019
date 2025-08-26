import React, { useState, useEffect, memo, useCallback } from 'react';

// This is the component with the performance bug.
// The candidate's task is to find and fix the issue that causes
// unnecessary re-renders when the user types in the search box.

// The ListItem component is memoized to prevent re-renders,
// but it is still re-rendering every time the user types.
const ListItem = memo(({ item, onClick }) => {
  // We use this local state to make the component seem more "real"
  // and to ensure that it has internal state, which is common in complex components.
  const [isExpanded, setIsExpanded] = useState(false);

  // This log is the key to spotting the performance issue.
  // The candidate should notice this logging on every keystroke.
  console.log(`Rendering ListItem: ${item.name}`);

  return (
    <li className="bg-white p-4 rounded-lg shadow-md mb-2 transition-transform transform hover:scale-105">
      <div className="flex items-center justify-between">
        <span className="text-gray-700 font-semibold">{item.name}</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={onClick} // This prop is the root of the problem.
            className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            Show Details
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-gray-700 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isExpanded ? 'transform rotate-180' : ''}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-4 p-4 bg-gray-50 rounded-md text-gray-600">
          <p><strong>ID:</strong> {item.id}</p>
          <p><strong>Category:</strong> {item.category}</p>
          <p><strong>Description:</strong> {item.description}</p>
        </div>
      )}
    </li>
  );
});

// This is the parent component that manages the search state
// and renders the list of items.
const SearchableList = () => {
  const allItems = [
    { id: 1, name: 'Wireless Mouse', category: 'Peripherals', description: 'Ergonomic mouse with a long battery life.' },
    { id: 2, name: 'Mechanical Keyboard', category: 'Peripherals', description: 'RGB keyboard with tactile switches.' },
    { id: 3, name: 'USB-C Hub', category: 'Accessories', description: '7-in-1 hub with HDMI and USB ports.' },
    { id: 4, name: 'External SSD', category: 'Storage', description: 'Fast and compact solid-state drive.' },
    { id: 5, name: 'Webcam', category: 'Peripherals', description: 'Full HD webcam with built-in microphone.' },
    { id: 6, name: 'Monitor Stand', category: 'Accessories', description: 'Elevates monitor for better ergonomics.' },
    { id: 7, name: 'Bluetooth Speaker', category: 'Audio', description: 'Portable speaker with rich bass.' },
    { id: 8, name: 'Noise-Cancelling Headphones', category: 'Audio', description: 'Over-ear headphones with premium sound quality.' },
    { id: 9, name: 'Graphics Tablet', category: 'Peripherals', description: 'Digital drawing tablet for artists.' },
    { id: 10, name: 'Charging Station', category: 'Accessories', description: 'Universal charging station for multiple devices.' },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  // This function is created on every single render of SearchableList,
  // including every time the user types in the search input.
  const handleItemClick = useCallback((item) => {
    alert(`Showing details for: ${item.name}`);
  }, []);

  const filteredItems = allItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Interactive Product List</h1>
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 shadow-sm"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <ul className="space-y-4">
          {filteredItems.map(item => (
            <ListItem
              key={item.id}
              item={item}
              onClick={()=>handleItemClick(item)} // Problem #1: Inline function creation
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchableList;
