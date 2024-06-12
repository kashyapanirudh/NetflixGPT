const VideoTitle = ({title, overview})=>{
    return (<div className="pt-36 px-24 aspect-video font-red-700 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="py-6 text-m w-1/4">{overview}</p>
        <div className="">
            <button className="bg-white text-black p-4 px-16 text-lg rounded-lg hover:bg-opacity-80">▶︎ Play</button>
            <button className=" mx-2 bg-gray-500 text-white p-4 px-16 text-lg bg-opacity-50 rounded-lg hover:bg-opacity-80">ⓘ More Info</button>
        </div>
    </div>
    )
}
export default VideoTitle;