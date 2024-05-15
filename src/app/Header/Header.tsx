import { IoMenu, IoPersonCircle } from "react-icons/io5";

import sun_happy from '../Assets/sun_happy.svg';
import sun_sad from '../Assets/sun_sad.svg';

import Image from "next/image";
import { CompletionContext } from "../hook/useCompletion";
import { useContext } from "react";

export default function Header() {

    const {completionPercentage} = useContext(CompletionContext)

    return (

        <div className="shadow-sm_gray flex flex-col z-10">

            <div className="h-16 flex justify-between p-4  z-10">
            
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

            <div className=" py-14 bg-white px-10">
                    
                <div className="w-full h-2 flex bg-gray-300 rounded-full shadow-sm_gray">
                    
                    <div style={{ width: `${completionPercentage}%` }} className={`duration-700 relative bg-yellow-500 rounded-full text-yellow-500 shadow-sm_yellow`}>

                        <div className="flex absolute -right-4 -top-4 flex-col items-center ">
                            
                            <div className="shadow-sm_yellow bg-white rounded-full">
                                <IoPersonCircle size={40} className="text-yellow-500"/>
                            </div>
                            
                            <text className="text-yellow-500 font-black">{completionPercentage}%</text>
                            
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}