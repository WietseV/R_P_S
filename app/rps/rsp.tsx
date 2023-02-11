'use client'

import { useState } from "react"
import { FaToiletPaper } from 'react-icons/fa'
import { GiStoneBlock, GiWolverineClaws} from 'react-icons/gi'
import ResultPop from "../resultPop"
import {play, resetGame, Game} from "../gameHandler"
import GameInfoBar from "./gameInfoBar"
import  useSWR from "swr"

const fetcher = (url: string) => fetch(url).then(res => res.json())

function getGame(){
    const { data, error, isLoading, mutate} = useSWR<Game>('/api/game', fetcher, {refreshInterval: 500})

    return {
        game: data,
        isLoading,
        isError: error,
        mutate: mutate,
    }
}

function Rps() {

    const { game, isLoading, isError, mutate } = getGame()


    // const [game, setGame] = useState<Game>()
    // const [loading, setLoading] = useState(false)
    const [showResult, setShowResult] = useState(false)

    // function getData(){
    //     setLoading(true)
    //     fetch('/api/game')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             // setGame(data)
    //             setLoading(false)
    //         })
    // }

    function reset(){
        resetGame()
        // setLoading(true)
        // fetch('/api/game')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         // setGame(data)
                setShowResult(false)
        //         setLoading(false)
        //     })
        
    }

    function handleClick(choice: string){
        // setLoading(true)
        play(choice)
        // mutate()
        // fetch('/api/game', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({play: true, choice: choice})
        //     }).then(() => fetch('/api/game')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         // setGame(data)
        //         getData()
        //         setLoading(false)
                setShowResult(true)
                mutate()
        //     }))
    }

    // useEffect(() => {
    //     getData()
    //     setType("rps")
    // }, [])

    if (isError) return <div>Failed to load</div>

    if(isLoading){
        return (
            <div className="max-w-5xl min-h-screen mx-auto flex flex-col justify-center items-center">
                <h1 className="text-black text-opacity-30 text-6xl font-bold">Loading...</h1>
                {/* Info bar on the right */}
                <div className="hidden px-8 w-1/5 h-full top-0 right-0 fixed bg-black bg-opacity-40 xl:flex justify-center items-center z-10">
                    <div>Loading...</div>
                </div>
            </div>
        )
    }

    return (
      <div className="max-w-5xl min-h-screen mx-auto flex flex-col justify-center items-center">
          <div className="absolute font-bold text-[#FF8552] mx-8 my-4 text-3xl flex flex-col justify-between items-center md:border-2 border-black border-dotted p-10 rounded-full ">
            <h2>Rock</h2><h2>Paper</h2><h2>Scissors</h2>
          </div>
        {/* Pick options */}
        <div className="flex justify-center items-center overflow-hidden">
            <div className="relative w-96 h-96 md:w-[600px] md:h-[600px] flex justify-center rounded-full items-center">
                <button
                id="rock"
                onClick={() => handleClick("rock")}
                className="absolute left-0 rotate-30 origin-[192px] md:origin-[300px]">
                    <div className="option rotate-330 ">
                        <GiStoneBlock className="icon"/>
                    </div>
                </button>
                <button 
                id="paper"
                onClick={() => handleClick("paper")}
                className="absolute left-0 rotate-150 origin-[192px] md:origin-[300px]">
                    <div className="option rotate-210 ">
                        <FaToiletPaper className="icon"/>
                    </div>
                </button>
                <button 
                onClick={() => handleClick("scissors")}
                className="absolute left-0 rotate-270 origin-[192px] md:origin-[300px]">
                    <div className="option rotate-90 ">
                        <GiWolverineClaws className="icon"/>
                    </div>
                </button>
            </div>
            
        </div>
        {/* Result pop up screen */}
        {ResultPop(game as Game, showResult, reset, isLoading)}
        {/* Info bar on the right */}
        <GameInfoBar game={game as Game} />
        {/* <div className="hidden px-8 w-1/5 h-full top-0 right-0 fixed bg-black bg-opacity-40 xl:flex justify-center items-center z-10">
          {(!game || loading) && <div>Loading...</div>}
          {game && GameInfo(game)}
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
                            {(!game || loading) && <div>Loading...</div>}
                            {game && GameInfo(game)}
                        </div>
                    </div>
                </div>
            </div>
            }
        </div> */}
      </div>
    )
  }
  
  export default Rps