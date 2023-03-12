import Image from "next/image";
import Om from "../../public/om.png"

const Loading = () => {
    return (
        <div className="bg-neutral-900 text-white overflow-hidden">
            <div className="flex flex-col justify-center items-center container h-screen m-auto pt-5 max-w-5xl p-2">
                <div className="w-50 h-50 mx-auto animate-pulse">
                    <Image src={Om} sizes={"200px"} alt="Loading..." />
                </div>
                <div>
                    <span className="text-md text-orange-400">Loading ... </span>
                </div>
            </div>
        </div>

    );
}
export default Loading