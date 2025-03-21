import Sidebar from "../../Components/Sidebar/Sidebar"
import MobileSidebar from "../../Components/MobileSidebar."
export default function Home(){
    return(
        <div className="flex flex-row w-screen h-screen">
        {/* Desktop Sidebar */}
        <div className="flex-col w-96 hidden lg:flex">
            <Sidebar />
        </div>
    
        {/* Main Content */}
        <div className="flex flex-col w-full items-center">
            asd
        </div>
    
        <div className="lg:hidden flex">
            <MobileSidebar />
        </div>        
    </div>   

    )
}