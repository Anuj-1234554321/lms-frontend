import HomeLayouts from "../Layouts/HomeLayouts";
import { Link } from "react-router-dom";
import homePageMainImage from "../Assets/Images/homePageMainImage.png";
function HomePage() {
    return (
        <HomeLayouts>
           <div className="pt-10 text-white flex item-center justify-center gap-10 mx-16 h-[90vh]">
              <div className="w-1/2 space-y-6">
              <h1 className="text-4xl font-semibold">find our best 
                <span className="text-yellow-500 font-bold"> Online courses</span>
              </h1>
              <p className="text-xl text-gray-200">Discover the best online courses tailored to your learning needs.Here with Us We Are the Best</p>
               
               <div className="space-x-6">
                <Link to="/courses">
                 <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">Explore Courses</button>
               </Link>

                <Link to="/about">
                 <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">Contact Us</button>
               </Link>
               </div>
              </div>
            <div className="w-1/2 flex item-centre justify-center ">
                <img alt="" src = {homePageMainImage}></img>
            </div>

           </div>
        </HomeLayouts>
    );

}

export default HomePage;