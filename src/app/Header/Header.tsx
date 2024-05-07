import { IoMenu, IoPersonCircle } from "react-icons/io5";

import sun_happy from '../Assets/sun_happy.svg';
import sun_sad from '../Assets/sun_sad.svg';

import Image from "next/image";

export default function Header() {

    return (

        <div className="h-16 flex justify-between p-4 shadow-sm_gray">
            
            <div className="flex items-center justify-center gap-6">

                <div className=" flex items-center">
                    <div className="text-yellow-500">
                        <IoPersonCircle size={50}/>
                    </div>

                    <div className="p-2 px-4 rounded-full bg-yellow-400 text-lg font-bold text-white">
                        Karolaine
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <text className="text-3xl font-black text-gray-500">5</text>

                    <div className="w-10 h-10">
                        <Image src={sun_sad} alt=""/>
                    </div>
                </div>

            </div>

            <div className="text-yellow-400">
                <IoMenu size={42}/>
            </div>

        </div>

    )
}