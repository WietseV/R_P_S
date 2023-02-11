'use client'

import { useEffect, useState } from "react"
import { FaToiletPaper } from 'react-icons/fa'
import { GiStoneBlock, GiWolverineClaws, GiTRexSkull, GiSpockHand} from 'react-icons/gi'
import ResultPop from "../resultPop"
import {play, resetGame, Game, setType} from "../gameHandler"
import GameInfo from "../gameInfo"

export default function Rps() {

    const [game, setGame] = useState<Game>()
    const [loading, setLoading] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [showResult, setShowResult] = useState(false)

    function getData(){
        setLoading(true)
        fetch('/api/game')
            .then((res) => res.json())
            .then((data) => {
                setGame(data)
                setLoading(false)
            })
    }

    function reset(){
        resetGame()
        fetch('/api/game')
            .then((res) => res.json())
            .then((data) => {
                setGame(data)
                setShowResult(false)
            })
        
    }

    function handleClick(choice: string){
        fetch('/api/game', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({play: true, choice: choice})
            }).then(() => fetch('/api/game')
            .then((res) => res.json())
            .then((data) => {
                setGame(data)
                setShowResult(true)
            }))
    }

    function handleClickInfo(){
        setShowInfo(!showInfo)
        getData()
    }

    useEffect(() => {
        getData()
        setType("rpsls")
    }, [])

    if(loading || !game){
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
          <div className="absolute font-bold text-[#FF8552] mx-8 my-4 text-xl flex flex-col justify-between items-center md:border-2 border-black border-dotted p-10 rounded-full ">
            <h2>Rock</h2><h2>Paper</h2><h2>Scissors</h2><h2>Lizard, Spock</h2>
          </div>
        {/* Pick options */}
        <div className="flex justify-center items-center overflow-hidden">
            <div className="relative w-96 h-96 md:w-[600px] md:h-[600px] flex justify-center rounded-full items-center">
                <button
                id="rock"
                onClick={() => handleClick("rock")}
                className="absolute left-0 rotate-[18deg] origin-[192px] md:origin-[300px]">
                    <div className="option rotate-[345deg]">
                        <h1><GiStoneBlock className="icon"/></h1>
                    </div>
                </button>
                <button
                id="paper" 
                onClick={() => handleClick("paper")}
                className="absolute left-0 rotate-[90deg] origin-[192px] md:origin-[300px]">
                    <div className="option  rotate-270">
                        <FaToiletPaper className="icon"/>
                    </div>
                </button>
                <button
                id="scissors" 
                onClick={() => handleClick("scissors")}
                className="absolute left-0 rotate-[162deg] origin-[192px] md:origin-[300px]">
                    <div className="option rotate-210">
                        <GiWolverineClaws className="icon"/>
                    </div>
                </button>
                <button
                id="lizard" 
                onClick={() => handleClick("lizard")}
                className="absolute left-0 rotate-[234deg] origin-[192px] md:origin-[300px]">
                    <div className="option rotate-90">
                        <GiTRexSkull className="icon"/>
                    </div>
                </button>
                <button
                id="spock" 
                onClick={() => handleClick("spock")}
                className="absolute left-0 rotate-[306deg] origin-[192px] md:origin-[300px]">
                    <div className="option rotate-90">
                        <GiSpockHand className="icon"/>
                    </div>
                </button>
            </div>
            
        </div>
        {/* Result pop up screen */}
        {ResultPop(game as Game, showResult, reset)}
        {/* Info bar on the right */}
        <div className="hidden px-8 w-1/5 h-full top-0 right-0 fixed bg-black bg-opacity-40 xl:flex justify-center items-center z-10">
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
            <div>
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
        </div>
      </div>
    )
  }
  