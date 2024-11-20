const Page = () => {
  return (

    <>
      {/* Front Page Start Here */}
      <div className="flex flex-col md:flex-row items-center justify-around bg-black w-full min-h-screen p-4">
        
        {/* Left Section: Text and Button */}
        <div className="flex flex-col items-center md:items-start text-center md:ml-12 md:text-left text-white md:w-6/12 mt-10 md:mt-0">
          <h1 className="text-3xl md:text-6xl font-serif font-bold mb-5">
            <span className="text-red-600 text-6xl md:text-7xl">F4</span> Game Zone
          </h1>
          <p className="text-lg md:text-2xl mb-7">
            Hello Welcome to F4 Game Zone. This is my area to represent my creation.
            Game is really a fantastic thing and also hope you will enjoy exploring
            my site and playing games!!
          </p>
          <button className="bg-red-600 text-white text-lg font-bold py-3 px-8 rounded-2xl hover:bg-white hover:text-red-500 transition duration-300">
            Play now
          </button>
        </div>
        

        {/* Right Section Image */}
        <div className="mt-8 md:mt-0 flex justify-center md:w-6/12">
          <img
            src="/Image.webp"
            alt="Main Image"
            className="w-full md:w-96 h-auto rounded-md shadow-lg"
          />
        </div>
      </div>
    
      {/* Front Page End Here */}
    </>
  );
};

export default Page;
