import { useEffect, useRef, useState } from "react";
import { IoPersonCircle } from "react-icons/io5";

import Image from "next/image";

import medalha from '../../../public/medalha (1).png';

export default function CheckList() {

    const [cam, setCam] = useState(false)

    const videoRef = useRef<HTMLVideoElement>(null)
    const photoRef = useRef<HTMLCanvasElement>(null)

    const getVideo = () => {

        setCam(true)
        console.log(innerWidth, innerHeight)

        navigator.mediaDevices
        .getUserMedia({
            video: { width: innerWidth, height: innerHeight }
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
    }

    const takePhoto = () => {
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


    useEffect( () => {
        getVideo();
    }, [videoRef]);

    return (

        <div className="px-10 w-full h-full overflow-y-scroll">

            {
                (cam == true) ? (
                    <div className="absolute left-0 top-0 right-0 bottom-0 bg-black z-20">
                        <video ref={videoRef} className=""></video>
                        <canvas ref={photoRef}></canvas>
                        <button onClick={() => setCam(false)} className="bg-slate-100 text-black rounded-full py-1 px-3">X</button>
                        <button onClick={takePhoto} className="bg-white">SNAP!</button>
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

            <div className="flex  p-10">

                <div className="flex flex-col items-center">
                
                    <div
                        onClick={() => getVideo()} 
                        className="flex shadow-sm_gray p-4 rounded-xl z-10 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400"
                    >
                        <text className="font-black drop-shadow-md text-white">Fachada da Loja</text>
                    </div>

                    <Image alt="" src={medalha} className="w-14 h-14 -mt-2"/>
                </div>

            </div>

           
        </div>

    )
}