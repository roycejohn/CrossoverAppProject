const Footer = () => {
    return (
      <footer className="bg-gray-800">
        {/* Upper container */}
        <div className="bg-[#434343] py-8 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            {/* Elements */}
            <div className="text-white flex flex-col items-center">
              <div className="mb-2">HERE WE ARE</div>
              <div>Newark 1700, NY.</div>
            </div>
            <div className="text-white flex flex-col items-center">
              <div className="mb-2">VISIT US</div>
              <div>8 pm - 3 am</div>
            </div>
            <div className="text-white flex flex-col items-center">
              <div className="mb-2">FOLLOW US</div>
              <div>moodydrink&food</div>
            </div>
            {/* Form */}
            <div className="text-white flex flex-col items-center md:space-x-4">
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="bg-gray-700 text-white px-4 py-2 rounded-md outline-none focus:bg-gray-600 focus:border-transparent focus:ring-2 focus:ring-yellow-500 mb-2 md:mb-0"
                />
              </div>
              <div>
                <button className="bg-yellow-500 text-gray-800 px-6 py-2 rounded-md transition duration-300 hover:bg-yellow-400 mt-5">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Lower container */}
        <div className="bg-[#eab535] py-4 text-center">
          <div className="container mx-auto">
            <p className="text-black">© 2020 Moody Drink & Food. All rights reserved</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;