'use client'

import { useRouter } from "next/navigation";
import { setType } from "./gameHandler";

export default function GameSelect(){

    const router = useRouter()

    function handleClick(type: string) {
        setType(type)
        router.push("/"+type)
    }
          
    return (
            <div className="w-full rounded-xl p-8 flex flex-col justify-items-center gap-8 border-2 border-black border-opacity-80">
                <div className=" flex justify-center items-center">
                    <div className="flex-1 flex flex-col justify-center items-center gap-4 ">
                        <button 
                        onClick={() => {handleClick("rps")}}
                        className="w-full p-4 gradient__orange rounded-lg">
                            <h1 className="text-xl text-black font-medium">R P S</h1>
                        </button>
                        <button 
                        onClick={() => {handleClick("rpsls")}}
                        className="w-full p-4 gradient__orange rounded-lg">
                            <h1 className="text-xl text-black font-medium">R P S L S</h1>
                        </button>
                    </div>
                </div>
            </div>
    );
}