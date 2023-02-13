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
                className={`absolute top-[50%] left-4 ${showGamemode ? "hidden": ""} z-20`}
                >
                    <IoIosArrowForward/>
                </button>
                {showGamemode &&
                    <div className='absolute w-screen h-screen bg-bggradient animate-fade-in-left z-20'>
                        <div className=" px-8 w-full h-full top-0 left-0 fixed bg-black bg-opacity-60 flex justify-center items-center">
                        <button
                        onClick={handleClickGamemode}
                        className="absolute top-[50%] left-4 "
                        >
                            <IoIosArrowBack />
                        </button>
                        <div className='w-2/3'>
                            <GameSelect/>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}