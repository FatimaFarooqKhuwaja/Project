const Page = () => {
    return (
      <>
        {/* Games Section Start Here */}
        <div className="container mx-auto px-4 py-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Game 1: Cricket */}
            <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-60 object-cover"
                src="circket.jpeg"
                alt="Cricket"
              />
              <div className="bg-red-500 text-white text-xl font-semibold py-2 w-full text-center">
                Cricket
              </div>
            </div>
  
            {/* Game 2: Vice City */}
            <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-60 object-cover"
                src="vicecity.jpeg"
                alt="Vice City"
              />
              <div className="bg-red-500 text-white text-xl font-semibold py-2 w-full text-center">
                Vice City
              </div>
            </div>
  
            {/* Game 3: PUBG */}
            <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-60 object-cover"
                src="pubg.jpeg"
                alt="PUBG"
              />
              <div className="bg-red-500 text-white text-xl font-semibold py-2 w-full text-center">
                PUBG
              </div>
            </div>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
            {/* Game 4: The War */}
            <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-60 object-cover"
                src="thewar.jpeg"
                alt="The War"
              />
              <div className="bg-red-500 text-white text-xl font-semibold py-2 w-full text-center">
                The War
              </div>
            </div>
  
            {/* Game 5: Subway */}
            <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-60 object-cover"
                src="subway.jpeg"
                alt="Subway"
              />
              <div className="bg-red-500 text-white text-xl font-semibold py-2 w-full text-center">
                Subway
              </div>
            </div>
  
            {/* Game 6: Car Race */}
            <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-60 object-cover"
                src="carrace.jpeg"
                alt="Car Race"
              />
              <div className="bg-red-500 text-white text-xl font-semibold py-2 w-full text-center">
                Car Race
              </div>
            </div>
          </div>
        </div>
        {/* Games Section Ends Here */}
      </>
    );
  };
  
  export default Page;
  