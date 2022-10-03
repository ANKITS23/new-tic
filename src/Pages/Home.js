export default function Home() {
  return (
    <div className="main-container">
      <div className="wrapper ">
        <div className=" home-container dark:bg-black">
          <Searchparts />   
          <Tools/>        
        </div>
      </div>
    </div>
  );
}


const Searchparts = () => {
  return (
    <div className="bg-gray-200 w-full p-8 py-8 my-5">
      <form className="w-full lg:flex justify-between gap-4 items-center">
        <label
          for="parts"
          className="font-extrabold text-center my-0 mx-auto lg:m-0 text-2xl"
        >
        Category
        </label>

        <select className="p-2 w-full mt-2 lg:mt-0 text-xl lg:w-[150px] ">
          <option value="year">Select Year</option>
          <option>1999</option>
          <option>1998</option>
        </select>
        <select className="p-2 w-full mt-2 lg:mt-0 text-xl  lg:w-[150px] ">
          <option value="make">Select Make</option>
          <option>123</option>
        </select>
        <select className="p-2 w-full mt-2 lg:mt-0 text-xl lg:w-[150px]">
          <option value="model">Select Model</option>
          <option>175</option>
          <option>456</option>
        </select>
        <div className="flex justify-between mt-2 lg:mt-0 gap-1">
          <button className="bg-gray-300 px-5 py-2 lg:w-[150px] w-1/2">
            FIND
          </button>
          <button className="bg-black text-white px-5 py-2lg:w-[150px] w-1/2 ">
            RESET
          </button>
        </div>
      </form>
    </div>
  );
};

const Tools = () => {
  return (
    <div className="info-container mt-4">
      <ul className=" md:flex md:justify-between md:mb-10 md:w-full ">
        <li className=" w-full bg-gray-100 flex justify-between items-center ">
          <div className="md:w-1/2 ">
            <img
              className="w-full block"
              src="../images/car-interior.webp"
          alt="abc" ></img>
          </div>
          <div className=" flex flex-col  text-center justify-between gap-2 w-1/2   ">
            <span className="text-center text-lg  md:text-2xl">Car Exhaust</span>
            <a className="bg-gray-300 text-center p-2 mx-7">Read more</a>
          </div>
        </li>

        <li className="w-full bg-gray-100 flex justify-between items-center">
          <div className="md:w-1/2  ">

            <img
              className="w-full   block"
              src="../images/wheels-tyre.webp"
          alt="abc" ></img>
          </div>
          <div className=" flex flex-col  text-center justify-between gap-2 w-1/2  ">
            <span className="text-center  text-2xl">Car Wheel</span>
            <a className="bg-gray-300 text-center p-2 mx-7">Read more</a>
          </div>
        </li>
      </ul>
    </div>
  );
};