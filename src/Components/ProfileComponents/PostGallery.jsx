export default function PostGallery() {
    const posts = [
        {
            src: "https://picsum.photos/300/400?random=1",
            title: "Sunset Vibes",
            description: "A beautiful view of the sunset by the ocean.",
            likes: 120,
            comments: 45,
        },
        {
            src: "https://picsum.photos/300/400?random=2",
            title: "Mountain Escape",
            description: "Hiking through the breathtaking mountains.",
            likes: 98,
            comments: 30,
        },
        {
            src: "https://picsum.photos/300/400?random=3",
            title: "City Lights",
            description: "A mesmerizing skyline view at night.",
            likes: 180,
            comments: 60,
        },
        {
            src: "https://picsum.photos/300/400?random=4",
            title: "Nature Walk",
            description: "Walking through the dense green forest.",
            likes: 75,
            comments: 25,
        },
        {
            src: "https://picsum.photos/300/400?random=5",
            title: "Beach Day",
            description: "Relaxing on a sunny beach with waves.",
            likes: 145,
            comments: 50,
        },
        {
            src: "https://picsum.photos/300/400?random=6",
            title: "Coffee Time",
            description: "Enjoying a hot cup of coffee in the morning.",
            likes: 90,
            comments: 35,
        },
        {
            src: "https://picsum.photos/300/400?random=7",
            title: "Road Trip",
            description: "Exploring new places on an epic road trip.",
            likes: 130,
            comments: 40,
        },
        {
            src: "https://picsum.photos/300/400?random=8",
            title: "Sky High",
            description: "Admiring the clouds from an airplane window.",
            likes: 200,
            comments: 75,
        },
    ];

    return (
        <div className="grid grid-cols-3 gap-4 md:gap-6">
            {posts.map((post, index) => (
                <div key={index} className="relative group">
                    {/* Image */}
                    <img
                        src={post.src}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 cursor-pointer bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                        <div className="text-white text-center">
                            <h3 className="text-lg font-bold">{post.title}</h3>
                            <p className="text-sm">{post.description}</p>
                        </div>

                        {/* Likes & Comments */}
                        <div className="text-white font-semibold flex space-x-4 mt-3">
                            <div className="flex items-center space-x-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                                <span>{post.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M21 6.5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2v-9z" />
                                </svg>
                                <span>{post.comments}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
