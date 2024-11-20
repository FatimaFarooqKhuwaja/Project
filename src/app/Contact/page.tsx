const Page = () => {
    return (
      <>
        {/* Main Wrapper */}
        <div className="bg-black min-h-screen flex flex-col md:flex md:justify-around items-center text-white py-10">
  
          {/* Live Stream Section Start Here */}
          <div className="flex flex-col items-center mt-10 md:mt-0 w-full max-w-lg">
            <h1 className="text-center text-4xl md:text-5xl text-red-500 mb-4 font-semibold">Live Streaming Today!</h1>
            <p className="text-xl text-gray-400 mb-6">08:00 PM</p>
            <button className="bg-red-500 text-white py-3 px-10 rounded-2xl hover:bg-white hover:text-red-500 transition duration-300">
              Join Quickly
            </button>
          </div>
          {/* Live Stream Section End Here */}
  
          {/* Login Form Section Start Here */}
          <div className="mt-12 md:mt-0 bg-gray-800 p-8 w-full max-w-md text-center rounded-2xl shadow-xl">
            <h2 className="text-2xl text-red-500 font-serif mb-6">Login Here</h2>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Here"
              className="w-full p-3 mb-4 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password Here"
              className="w-full p-3 mb-6 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-500 text-white py-3 px-8 rounded-2xl w-full hover:bg-white hover:text-red-500 transition duration-300">
              Login
            </button>
          </div>
          {/* Login Form Section End Here */}
  
        </div>
      </>
    );
  };
  
  export default Page;
  