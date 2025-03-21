import img from "../../assets/public/Home.png";
import Search from "../../assets/public/Search.png";
import star from "../../assets/public/Star.png";
import Like from "../../assets/public/Like.png";

export default function Sidebar() {
    return (
        <div className="flex flex-col w-full h-full bg-white border-r">
            <div className="flex flex-col h-full justify-between">
                <div>
                    <div className="flex-row flex items-center pt-20 pl-5">
                        <span className="font-extrabold text-xl">ChefConnect</span>
                    </div>
                    <div className="flex-col w-full mt-20 pl-2">
                        <div className="flex-row flex items-center hover:bg-purple-200 px-4 py-4 rounded-xl mb-1 cursor-pointer">
                            <img src={img} alt="" className="w-6" />
                            <span className="font-extrabold text-md px-4">Home</span>
                        </div>
                        <div className="flex-row flex items-center hover:bg-purple-200 px-4 py-4 rounded-xl mb-1 cursor-pointer">
                            <img src={Search} alt="" className="w-6" />
                            <span className="font-extrabold text-md px-4">Search</span>
                        </div>
                        <div className="flex-row flex items-center hover:bg-purple-200 px-4 py-4 rounded-xl mb-1 cursor-pointer">
                            <img src={star} alt="" className="w-6" />
                            <span className="font-extrabold text-md px-4">Explore</span>
                        </div>
                        <div className="flex-row flex items-center hover:bg-purple-200 px-4 py-4 rounded-xl mb-1 cursor-pointer">
                            <img src={Like} alt="" className="w-6" />
                            <span className="font-extrabold text-md px-4">Notifications</span>
                        </div>
                        <div className="flex-row flex items-center hover:bg-purple-200 px-4 py-4 rounded-xl mb-1 cursor-pointer">
                            <img src={Like} alt="" className="w-6" />
                            <span className="font-extrabold text-md px-4">Profile</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full  pl-2 mb-5">
                    <div className="flex-row flex items-center hover:bg-purple-200 px-4 py-4 rounded-xl cursor-pointer">
                        <img src={img} alt="" className="w-6" />
                        <span className="font-extrabold text-md px-4">Logout</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
