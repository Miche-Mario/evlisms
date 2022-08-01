
 <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
            </div>
            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
          </div>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>




          <div className='flex flex-col'>
            <div className='w-1/4 mx-2 flex-1'>
              <div>
              <div className='font-bold h-6 mt-3 text-gray-500 text-xs
              leading-8 uppercase'>
                  {" "}
                  Username
              </div>
              <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                <input
                  onChange={handleChange}
                  value={userData["username"] || ""}
                  name="username"
                  placeholder="Username"
                  className="p-1 px-2 appearance-none outline-none w-full
                  text-gray-800"
                />
              </div>
              <div className='font-bold h-6 mt-3 text-gray-500 text-xs
              leading-8 uppercase'>
                  {" "}
                  Username
              </div>
              <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                <input
                  onChange={handleChange}
                  value={userData["username"] || ""}
                  name="username"
                  placeholder="Username"
                  className="p-1 px-2 appearance-none outline-none w-full
                  text-gray-800"
                />
              </div>
              <div className='font-bold h-6 mt-3 text-gray-500 text-xs
              leading-8 uppercase'>
                  {" "}
                  Username
              </div>
              <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                <input
                  onChange={handleChange}
                  value={userData["username"] || ""}
                  name="username"
                  placeholder="Username"
                  className="p-1 px-2 appearance-none outline-none w-full
                  text-gray-800"
                />
              </div>
              </div>
            </div>
          </div>
      