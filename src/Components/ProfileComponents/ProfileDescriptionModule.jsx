import img from "../../assets/public/logo.png";
import NameButton from "../../Components/ProfileComponents/NameButton";
import ProfileStats from "../../Components/ProfileComponents/ProfileStats";
import ProfileDescription from "../../Components/ProfileComponents/ProfileDescription";
export default function ProfileDescriptionModule(){
    return (
        <div className="flex flex-row justify-start lg:my-10 my-20 w-full">
                <div className="flex flex-col lg:mr-40">
                    <img src={img} alt="Profile" className="lg:w-55 lg:h-55 rounded-full object-cover"/>
                </div>
                <div className="flex flex-col">
                    <NameButton />
                    <ProfileStats />
                    <ProfileDescription />
                    
                </div>
            </div>
    )
}