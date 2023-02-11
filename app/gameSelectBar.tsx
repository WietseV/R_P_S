import GameSelect from "./gameSelect"
import { useState } from "react"

export default function Bar() {

    const [showGamemode, setShowGamemode] = useState(false)

    function handleClickGamemode(){
        setShowGamemode(!showGamemode)
    }

    return (
        <div>
            <div className="hidden px-8 w-1/5 h-full top-0 left-0 fixed bg-black bg-opacity-40 xl:flex justify-center items-center z-10">
                <GameSelect/>
            </div>
            <div className='xl:hidden'>
                <button
                onClick={handleClickGamemode}
                className={`absolute top-4 left-4 w-8 h-8 rounded-full bg-white ${showGamemode ? "hidden": ""}`}
                >
                </button>
                {showGamemode &&
                    <div className='w-screen h-screen bg-bggradient'>
                        <div className=" px-8 w-full h-full top-0 left-0 fixed bg-black bg-opacity-60 flex justify-center items-center z-10">
                        <button
                        onClick={handleClickGamemode}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white"
                        ></button>
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