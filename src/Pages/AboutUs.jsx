import aboutMainImage from '../Assets/Images/aboutMainImage.png';
import HomeLayouts from '../Layouts/HomeLayouts';
import CaraouselSlide from '../Components/CarouselSlide.jsx'
import { Celebrities } from '../Constants/CelebrityData.js';

function AboutUs(){
    return (
    <HomeLayouts>
        <div className="pl-20 pt-20 flex flex-col text-white">
           <div className="flex items-center gap-5 mx-10">
              <section className="w-1/2 space-y-10">
                <h1 className="text-4xl text-yellow-500 font-semibold">Affordable Quality Education</h1>
                <p className="text-xl text-gray-200 "> Our goal is to provide accessible and high-quality education to everyone, regardless of their background or financial situation.</p>
                </section>
              
                <div className="w-1/2">
                    <img id="test1" style={{filter: "drop-shadow(0px 10px 10px,rgb(0, 0, 0))"}} className="drop-shadow-2xl" src={aboutMainImage} />
                </div>
            </div>

            <div className="carousel w-1/2 my-16 m-auto">
                {Celebrities &&  Celebrities.map(celebrity => <CaraouselSlide
                                             {...celebrity}
                                             key={celebrity.slideNumber}
                                             totalSlides={Celebrities.length}
                                            />)}

            </div>            
        </div>
    </HomeLayouts>
        
    );
}
export default AboutUs;