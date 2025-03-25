import ProfileDescriptionModule from "../../Components/ProfileComponents/ProfileDescriptionModule";
import HorizontalLine from "../../Components/Generic/HorizontalLine";
import PostGallery from "../../Components/ProfileComponents/PostGallery";
export default function Profile(){
    
    return (
        <div className="flex flex-col ">
            <ProfileDescriptionModule />
            <HorizontalLine />
            <div className="w-full mx-auto p-4">
                <PostGallery />
            </div>
        </div>
    )

}