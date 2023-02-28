import GameSelect from "./gameSelect"
import { useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function Bar() {

    const [showGamemode, setShowGamemode] = useState(false)

    function handleClickGamemode(){
        setShowGamemode(!showGamemode)
    }

    return (
        <div>
            <div className="hidden px-8 w-1/5 h-full top-0 left-0 absolute bg-black bg-opacity-40 xl:flex justify-center items-center">
                <GameSelect/>
            </div>
            <div className='xl:hidden'>
                <button
                onClick={handleClickGamemode}
                className={`absolute bottom-4 left-4 ${showGamemode ? "hidden": ""} z-20 p-4 pr-2`}
                >
                    <IoIosArrowForward/>
                </button>
                    <div className={`absolute w-screen h-screen bg-bggradient ${showGamemode ? "animate-fade-in-left " : "animate-fade-out-right -translate-x-full"} z-20`}>
                        <div className=" px-8 w-full h-full top-0 left-0 fixed bg-black bg-opacity-60 flex justify-center items-center">
                        <button
                        onClick={handleClickGamemode}
                        className="absolute bottom-4 left-4 p-4 pr-2"
                        >
                            <IoIosArrowBack />
                        </button>
                        <div className='w-full'>
                            <GameSelect/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}