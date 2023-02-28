'use client'

import { useState } from 'react'
import { Game, resetScore } from './gameHandler'
import GameInfo from './gameInfo'
import useSWR from 'swr'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useRouter } from "next/navigation";
import GameRules from './GameRules'

export default function GameInfoBar(props: {type: string}) {

    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { data: game, isLoading} = useSWR<Game>('/api/gameServer', fetcher, { refreshInterval: 100 })
    const [showInfo, setShowInfo] = useState(false)
    const [showRules, setShowRules] = useState(false)
    const router = useRouter()

    function handleClickInfo(){
        setShowInfo(!showInfo)
    }

    function handleRules() {
        setShowRules(!showRules)
        if (!showRules){
            setShowInfo(false)
        }
    }

    function handleResetScore(){
        resetScore()
    }

    function handleHome(){
        router.push('/')
    }

    return (
        <div>
            <div className="hidden px-8 w-1/5 h-full top-0 right-0 absolute bg-black bg-opacity-40 xl:flex justify-center items-center">
                {(!game || isLoading) && <div>
                        <div className="relative animate-spin h-20 w-20 bg-spin rounded-full" />
                        <h1 className='text-center text-xl font-bold opacity-40'>Loading...</h1>
                    </div>}
                {game && (GameInfo(game, props.type, handleRules, handleHome, handleResetScore))}
            </div>
            <div className='xl:hidden'>
                <button
                onClick={handleClickInfo}
                className={`absolute top-[50%] right-4 ${showInfo ? "hidden": ""} z-10 p-4 pr-2`}
                >
                    <IoIosArrowBack/>
                </button>
                <div className={`absolute w-screen h-screen bg-bggradient ${showInfo ? "animate-fade-in-right": "animate-fade-out-left -translate-x-full"} z-20`}>
                    <div className=" px-8 w-full h-full top-0 left-0 fixed bg-black bg-opacity-60 flex justify-center items-center">
                        <button
                        onClick={handleClickInfo}
                        className="absolute top-[50%] right-4 p-4 pr-2"
                        >
                            <IoIosArrowForward />
                        </button>
                        <div className='w-2/3 flex justify-center items-center'>
                            <div className="flex-1 flex flex-col justify-center items-center gap-4 ">
                                {game && 
                                    (GameInfo(game, props.type, handleRules, handleHome, handleResetScore))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {game && <GameRules type={props.type} showRules={showRules} handleRules={handleRules}/>}
        </div>
    )
}