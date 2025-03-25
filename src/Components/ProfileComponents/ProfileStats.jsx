export default function ProfileStats(){
    return (
        <div className="flex flex-row items-baseline py-3">
            <div className="flex-col pr-10">
                <div className="flex flex-row">
                    <span className="font-extrabold pr-1">343</span>
                    <span className="text-gray-600">posts</span>
                </div>
            </div>
            <div className="flex-col pr-10">
                <div className="flex flex-row">
                    <span className="font-extrabold pr-1">206</span>
                    <span className="text-gray-600">followers</span>
                </div>
            </div>
            <div className="flex-col pr-10">
                <div className="flex flex-row">
                    <span className="font-extrabold pr-1">790</span>
                    <span className="text-gray-600">following</span>
                </div>
            </div>
        </div>
    )
}