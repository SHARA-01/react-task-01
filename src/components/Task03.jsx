import React, { useState } from 'react';

function Task03() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  
  const allUsers = ['user01', 'user02', 'user03', 'user04', 'react', 'otherName']; 

  const handleSearch = (query) => {
    const filtered = allUsers.filter(user => user.toLowerCase().includes(query.toLowerCase()));
    setFilteredUsers(filtered);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className='text-center'>
      <input 
      className='border border-gray-400 rounded-md p-2'
        type="text" 
        placeholder="Search for a user..." 
        value={searchQuery} 
        onChange={handleChange} 
      />
      <ul>
        { filteredUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default Task03;
