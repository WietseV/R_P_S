'use client'

import { useEffect, useState } from "react"
import { FaToiletPaper } from 'react-icons/fa'
import { GiStoneBlock, GiWolverineClaws, GiTRexSkull, GiSpockHand} from 'react-icons/gi'
import { play, setType } from "../gameHandler"
import ResultPop from "../resultPop"

function Rpsls() {

    const [result, setResult] = useState(false)

    function handleClickResult(){
        setResult(false)
    }

    function handleClick(choice: string){
        play(choice)
        setResult(true)
    }

    useEffect(() => {
        setType('rpsls')
    }, [])


    return (
      <div className="max-w-5xl min-h-screen mx-auto flex flex-col justify-center items-center">
          <div className="absolute font-bold text-[#FF8552] mx-8 my-4 text-xl flex flex-col justify-between items-center md:border-2 border-black border-dotted p-10 rounded-full ">
            <h2>Rock</h2><h2>Paper</h2><h2>Scissors</h2><h2>Lizard, Spock</h2>
          </div>
        {/* Pick options */}
        <div className="flex justify-center items-center overflow-hidden">
            <div className="relative w-96 h-96 md:w-[600px] md:h-[600px] flex justify-center rounded-full items-center">
                <button
                onClick={() => handleClick("rock")}
                className="absolute left-0 rotate-[18deg] origin-[192px] md:origin-[300px]">
                    <div id="option" className="option rotate-[342deg]">
                        <GiStoneBlock className="icon"/>
                        <p className='absolute opacity-0 text-xl font-semibold'>Rock</p>
                    </div>
                </button>
                <button
                onClick={() => handleClick("paper")}
                className="absolute left-0 rotate-[90deg] origin-[192px] md:origin-[300px]">
                    <div id="option" className="option  rotate-270">
                        <FaToiletPaper className="icon"/>
                        <p className='absolute opacity-0 text-xl font-semibold'>Paper</p>
                    </div>
                </button>
                <button
                onClick={() => handleClick("scissors")}
                className="absolute left-0 rotate-[162deg] origin-[192px] md:origin-[300px]">
                    <div id="option" className="option rotate-[198deg]">
                        <GiWolverineClaws className="icon"/>
                        <p className='absolute opacity-0 text-xl font-semibold'>Scissors</p>
                    </div>
                </button>
                <button
                onClick={() => handleClick("lizard")}
                className="absolute left-0 rotate-[234deg] origin-[192px] md:origin-[300px]">
                    <div id="option" className="option rotate-[126deg]">
                        <GiTRexSkull className="icon"/>
                        <p className='absolute opacity-0 text-xl font-semibold'>Lizard</p>
                    </div>
                </button>
                <button
                onClick={() => handleClick("spock")}
                className="absolute left-0 rotate-[306deg] origin-[192px] md:origin-[300px]">
                    <div id="option" className="option rotate-[54deg]">
                        <GiSpockHand className="icon"/>
                        <p className='absolute opacity-0 text-xl font-semibold'>Spock</p>
                    </div>
                </button>
            </div>
        </div>
        <ResultPop show={result} setShow={handleClickResult} />
      </div>
    )
  }
  
  export default Rpsls