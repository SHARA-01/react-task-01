import React, { useState } from 'react'
import List from '../assets/userList'

function UserList() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filtered, setFilteredData] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [listData, setListData] = useState(List)

    const handleFilter = (value)=> {
        const data = List.filter(data => (data.name.toLowerCase().includes(value.toLowerCase()) || data.id.toLowerCase().includes(value.toLowerCase())))
        setFilteredData(data)
    }
    
    const handleSort = (orderr) => {
        const sorted = [...filtered].sort((a, b) => {
          return orderr === 'asc' ? a.order - b.order : b.order - a.order;
        });
        setFilteredData(sorted);
        const sortlist = [...listData].sort((a, b) => {
            return orderr === 'asc' ? a.order - b.order : b.order - a.order;
          });
        setListData(sortlist)
      };
    
      const toggleSortOrder = () => {
        const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newOrder)
        handleSort(newOrder);
        console.log("clicked")
      };

  return (
    <div>
        <div>
            <input type="text" value={searchQuery} onChange={(e)=>{ setSearchQuery(e.target.value), handleFilter(e.target.value)}}  className='border border-gray-400 rounded-md p-2' placeholder='Search User' />
        </div>
       <table className='w-full mx-auto text-center'>
        <thead>
            <th>Customer</th>
            <th>Last Seen</th>
            <th onClick={toggleSortOrder} className='cursor-pointer border-2 border-transparent rounded-md hover:border-2 hover:border-gray-200 text-blue-600'>Orders</th>
            <th>Total Spent</th>
            <th>latest Purches</th>
            <th>News sucription</th>
            <th>Segment</th>
        </thead>
        {
        filtered.length >   0 ? filtered?.map((data)=> (
            <tr key={data?.id}>
            <td>{data?.name}</td>
            <td>{data?.last_seen}</td>
            <td >{data?.order}</td>
            <td>{data?.total_spent}</td>
            <td>{data?.latest_purches}</td>
            <td>{data?.news ? "✅" : "❌"}</td>
            <td>{data?.segment}</td>
        </tr>
        ))
        :
        listData?.map((data)=> (
                <tr key={data?.id}>
                    <td>{data?.name}</td>
                    <td>{data?.last_seen}</td>
                    <td>{data?.order}</td>
                    <td>{data?.total_spent}</td>
                    <td>{data?.latest_purches}</td>
                    <td>{data?.news ? "✅" : "❌"}</td>
                    <td>{data?.segment}</td>
                </tr>
        ))
        }
       </table>
    </div>
  )
}

export default UserList