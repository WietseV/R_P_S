'use client'

import { useState } from 'react'
import { Game } from '../gameHandler'
import GameInfo from '../gameInfo'

export default function Bar(props: {game: Game, isLoading: Boolean}) {



    const [showInfo, setShowInfo] = useState(false)

    function handleClickInfo(){
        setShowInfo(!showInfo)
    }

    return (
        <div>
            <div className="hidden px-8 w-1/5 h-full top-0 right-0 fixed bg-black bg-opacity-40 xl:flex justify-center items-center z-10">
          {(!props.game || props.isLoading) && <div>Loading...</div>}
          {props.game && GameInfo(props.game)}
        </div>
        <div className='xl:hidden'>
            <button
            onClick={handleClickInfo}
            className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-white ${showInfo ? "hidden": ""}`}
            >
            </button>
            {showInfo &&
            <div className='fixed top-0 left-0 w-screen h-screen bg-bggradient'>
                <div className=" px-8 w-full h-full top-0 left-0 fixed bg-black bg-opacity-80 flex justify-center items-center z-10">
                    <button
                    onClick={handleClickInfo}
                    className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white"
                    ></button>
                    <div className='w-2/3 flex justify-center items-center'>
                        <div className="flex-1 flex flex-col justify-center items-center gap-4 ">
                            {(!props.game || props.isLoading) && <div>Loading...</div>}
                            {props.game && GameInfo(props.game)}
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
        </div>
    )
}