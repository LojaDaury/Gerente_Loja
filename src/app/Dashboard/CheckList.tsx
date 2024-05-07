import { useEffect, useRef, useState } from "react";
import { IoPersonCircle, IoTrash, IoCheckmark  } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

import Image from "next/image";

import medalha from '../Assets/medalha (1).png';

export default function CheckList() {

    const [cam, setCam] = useState(false)

    const [hasPhoto, setHasPhoto] = useState(false)

    const videoRef = useRef<HTMLVideoElement>(null)
    const photoRef = useRef<HTMLCanvasElement>(null)

    const getVideo = () => {

        setHasPhoto(false)
        
        navigator.mediaDevices
        .getUserMedia({
            video: { facingMode: 'environment', width: innerHeight, height: innerWidth }
        })
        .then(stream => {
            if (videoRef.current) {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            }
        })
        .catch( err => {
            console.error(err);
        })

        setCam(true)
    }

    const takePhoto = () => {
        
        setHasPhoto(true)

        const width = innerWidth;
        const height = innerHeight;

        if (photoRef.current && videoRef.current) {
            let video = videoRef.current;
            let photo = photoRef.current;

            photo.width = width;
            photo.height = height;
        
            let ctx = photo.getContext('2d');

            if (ctx) {
                ctx.drawImage(video, 0, 0, width, height);

                /*
                photo.toBlob(blob => {
                    // Criar um novo objeto de arquivo a partir do Blob
                    const file = new File([blob], 'photo.jpg', { type: 'image/jpeg' });
    
                    // Agora você pode fazer o que quiser com o arquivo, como fazer upload
                    // para um banco de dados ou exibi-lo em algum lugar
                    uploadPhoto(file);
                }, 'image/jpeg');
                */
            }
        }


    }


    

    return (

        <div className="px-10 w-full h-full overflow-y-scroll">

            {   (cam == true) ? (
                    <div className="absolute left-0 top-0 right-0 bottom-0 overflow-hidden bg-black z-20">
                        
                        <div className="w-screen h-screen absolute top-10 right-0 bottom-0 left-0">
                            <video ref={videoRef} className=" w-screen h-screen"></video>
                        </div>

                        <div className={`absolute top-10 right-0 bottom-0 duration-500 ${ hasPhoto ? 'left-0': '-left-[1999px]'}`}>
                            <canvas ref={photoRef} 
                            className={`py-8`}/>
                        </div>
                        
                        <button onClick={() => {setCam(false)}} 
                            className="absolute top-6 left-6 bg-white text-black rounded-full duration-300 hover:top-5 hover:left-7">
                            <IoIosClose size={40}/>        
                        </button>
                        
                        <div className="flex justify-center items-end gap-6 absolute bottom-6 left-0 right-0">

                            <button disabled={!hasPhoto} onClick={() => setCam(false)} 
                                className={` hover:bg-gray-400 duration-500 
                                    border-2 border-white p-2 
                                    rounded-full ${hasPhoto?'bg-green-400 text-white hover:bg-green-600': 'bg-white text-black'}`}>
                                <IoCheckmark  size={28}/>
                            </button>

                            <button onClick={takePhoto} 
                                className="bg-gray-600 hover:bg-gray-300 duration-500 
                                    border-4 border-gray-300 hover:border-gray-600 w-16 h-16 
                                    rounded-full"/>

                            <button onClick={() => setHasPhoto(false)} 
                                className="bg-white hover:bg-gray-400 duration-500 
                                    border-2 border-white hover:border-white p-2 
                                    rounded-full">
                                <IoTrash size={28}/>
                            </button>

                        </div>

                    </div>
                ) : (
                    <div/>
                )
            }

            <div className="w-full group ">
          
                <div className="w-full h-3 flex bg-gray-300 rounded-full shadow-sm_gray">
                    
                    <div className="w-1/5 group-hover:w-3/5 duration-700 flex bg-yellow-500 rounded-full text-yellow-500 shadow-sm_yellow"/>

                </div>

                <div className=" ml-4 mt-2 duration-700 group-hover:w-3/5 w-1/5 flex justify-end">
            
                    <div className="flex flex-col items-center">
                        <text className="text-yellow-500 font-black">20%</text>

                        <div className="shadow-sm_yellow rounded-full">
                            <IoPersonCircle size={40} className="text-yellow-500"/>
                        </div>
                    </div>

                </div>

            </div>

            <div className="flex flex-col p-10 gap-6">

                <div className="flex flex-col items-center">
                
                    <button
                        onClick={() => getVideo()} 
                        className="flex shadow-sm_gray p-4 rounded-xl z-10 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400"
                    >
                        <text className="font-black drop-shadow-md text-white">Fachada da Loja</text>
                    </button>

                    <Image alt="" src={medalha} className="w-14 h-14 -mt-2"/>
                </div>
                <div className="flex flex-col items-center">
                
                    <button
                        onClick={() => getVideo()} 
                        className="flex shadow-sm_gray p-4 rounded-xl z-10 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400"
                    >
                        <text className="font-black drop-shadow-md text-white">Fachada da Loja</text>
                    </button>

                    <Image alt="" src={medalha} className="w-14 h-14 -mt-2"/>
                </div>

            </div>
           
        </div>

    )
}