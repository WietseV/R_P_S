'use client'

import { useState } from 'react'
import { Game } from './gameHandler'
import GameInfo from './gameInfo'
import useSWR from 'swr'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function Bar() {

    const fetcher = (url: string) => fetch(url).then(res => res.json())

    const { data: game, error, isLoading, mutate} = useSWR<Game>('/api/game', fetcher, {refreshInterval: 500})

    const [showInfo, setShowInfo] = useState(false)

    function handleClickInfo(){
        setShowInfo(!showInfo)
    }

    return (
        <div>
            <div className="hidden px-8 w-1/5 h-full top-0 right-0 absolute bg-black bg-opacity-40 xl:flex justify-center items-center">
                {(!game || isLoading) && <div>Loading...</div>}
                {game && GameInfo(game)}
            </div>
            <div className='xl:hidden'>
                <button
                onClick={handleClickInfo}
                className={`absolute top-[50%] right-4 ${showInfo ? "hidden": ""} z-20`}
                >
                    <IoIosArrowBack/>
                </button>
                {showInfo &&
                <div className='absolute w-screen h-screen bg-bggradient animate-fade-in-right z-20'>
                    <div className=" px-8 w-full h-full top-0 left-0 fixed bg-black bg-opacity-60 flex justify-center items-center">
                        <button
                        onClick={handleClickInfo}
                        className="absolute top-[50%] right-4 "
                        >
                            <IoIosArrowForward />
                        </button>
                        <div className='w-2/3 flex justify-center items-center'>
                            <div className="flex-1 flex flex-col justify-center items-center gap-4 ">
                                {(!game || isLoading) && <div>Loading...</div>}
                                {game && GameInfo(game)}
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}