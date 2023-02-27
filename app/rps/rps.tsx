'use client'

import { useState } from 'react'
import { FaToiletPaper } from 'react-icons/fa'
import { GiStoneBlock, GiWolverineClaws} from 'react-icons/gi'
import { play } from "../gameHandler"
import { gameInstance } from '../gameLogic'
import ResultPop from './resultPop'

function Rps() {

    const [result, setResult] = useState(false)
    const singlePlayer = gameInstance

    function handleClickResult(){
        setResult(false)
    }

    function handleClick(choice: string){
        if(true) {
            singlePlayer.play(choice)
        } else {
            play(choice)
        }
        setResult(true)
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
      <ResultPop show={result} setShow={handleClickResult} singlePlayer={singlePlayer} />
      </div>
    )
  }
  
  export default Rps