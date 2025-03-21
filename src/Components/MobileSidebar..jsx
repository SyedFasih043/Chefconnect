import img from "../assets/public/Home.png";
import Search from "../assets/public/Search.png";
import star from "../assets/public/Star.png";
import Like from "../assets/public/Like.png";


export default function MobileSidebar(){
    return(
        <div className="fixed bottom-0 left-0 w-full bg-white border-t lg:hidden flex justify-around py-4">
            <div className="flex flex-col items-center cursor-pointer">
                <img src={img} alt="Home" className="w-6" />
                <span className="text-sm">Home</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <img src={Search} alt="Search" className="w-6" />
                <span className="text-sm">Search</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <img src={star} alt="Explore" className="w-6" />
                <span className="text-sm">Explore</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <img src={Like} alt="Notifications" className="w-6" />
                <span className="text-sm">Notifications</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <img src={img} alt="Profile" className="w-6" />
                <span className="text-sm">Profile</span>
            </div>
        </div>
    )
}