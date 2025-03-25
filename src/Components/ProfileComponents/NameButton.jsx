export default function NameButton() {
  return (
    <div className="flex flex-row items-baseline">
      <div className="flex-col pr-5">
        <h1 className="font-bold ">Ziyadk147</h1>
      </div>
      <div className="flex-col pr-3">
        <button
          type="button"
          className="bg-purple-500 hover:bg-purple-600 text-white w-full py-1 px-4 rounded-lg font-bold text-md mb-4 transition-transform"
        >
          Edit Profile
        </button>
      </div>
      <div className="flex-col pr-3">
        <button
          type="button"
          className="bg-purple-500 hover:bg-purple-600 text-white w-full py-1 px-4 rounded-lg text-md font-bold mb-4 transition-transform"
        >
          View Archive
        </button>
      </div>
    </div>
  );
}
