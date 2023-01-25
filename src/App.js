import { useState } from 'react';
import {users} from './data'

function App() {
  const [search, setSearch] = useState("")

  const handleChange = e => {
    setSearch(e.target.value)
  };

  let filteredUsers = [];

  if (search !== "") {
    filteredUsers = users.filter(item => item.first_name.toLowerCase().includes(search.toLowerCase()));
  }else{
    filteredUsers = users;
  }


  return (
    <div className="px-28">
      <h1 className='display-4 text-center my-4 text-2xl font-semibold'>React Search Filter</h1>
      <div>
      <label htmlFor="search" className="sr-only">
        Email
      </label>
      <input
        type="text"
        name="search"
        id="search"
        onChange={handleChange}
        className="block w-full rounded-md border px-3 py-3 outline-none border-gray-300 shadow-sm sm:text-sm"
        placeholder="Search contact by name"
      />
    </div>
    <div>
      <div className="mt-8 flex flex-col">
         
          <div className="inline-block w-full py-2">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      First Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Last Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Country
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredUsers.map(item => (
                     <tr key={item.id}>
                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.first_name}</td>
                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.last_name}</td>
                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.email}</td>
                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.Country}</td>
                   </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </div>
    
    </div>
  );
}

export default App;
