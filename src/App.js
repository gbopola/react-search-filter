function App() {
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
                     <tr key="1">
                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">David</td>
                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Rice</td>
                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">davidrice@example.com</td>
                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">GB</td>
                   </tr>
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
