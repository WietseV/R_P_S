'use client'

import { FaToiletPaper } from 'react-icons/fa'
import { GiStoneBlock, GiWolverineClaws, GiTRexSkull, GiSpockHand } from 'react-icons/gi'
import { Game, resetGame } from './gameHandler'
import  useSWR from "swr"

function ResultPop(props: {show: Boolean, setShow: Function}){
    
    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { data: game, isLoading, error, mutate } = useSWR<Game>('/api/game', fetcher);

    function handleClick(){
        resetGame()
        props.setShow(!props.show)
        mutate()
    }

    if(isLoading) return (
        <div className='fixed top-16 left-[50%] -translate-x-[40px]'>
            <div className="relative animate-spin h-20 w-20 bg-spin rounded-full" />
            <h1 className='text-center text-xl font-bold opacity-40'>Loading...</h1>
        </div>
    )

    if(error || !game) return <div></div>

    return (
        <div className={!props.show ? "hidden" : "w-screen h-screen top-0 left-0 fixed bg-black bg-opacity-40 flex flex-col justify-center items-center z-10"}>
            <div className={`max-w-6xl rounded-xl p-8 md:px-16 flex flex-col justify-items-center gap-8 border-2 border-black border-opacity-80 ${(game.result==="YOU WIN") ? "bg-gold" : (game.result==="YOU LOSE" || game.result==="YOU TIE") ? "bg-silver" : "bg-stone-700 opacity-90"}`}>
                {(game.result === "") && <div className=" flex flex-col md:flex-row justify-center items-center select-none">
                    <div className="flex-1 mx-4 flex flex-col justify-center items-center">
                        <h1 className="pb-4 font-semibold text-lg text-transparent">filler</h1>
                        <div className="resultloading"/>
                    </div>
                    <div className="hidden md:flex-1 md:flex md:flex-col justify-center items-center px-8 ">
                        <h1 className="pb-4 text-4xl text-transparent font-bold text-center">filler</h1>
                        <div className="w-full py-4 px-8 bg-stone-500 rounded-lg">
                            <h1 className="text-xl text-transparent font-medium">Play again!</h1>
                        </div>
                    </div>
                    <div className="flex-1 mx-4 flex flex-col justify-center items-center">
                    <h1 className="pb-4 font-semibold text-lg text-transparent">filler</h1>
                        <div className="resultloading"/>
                    </div>
                </div>}
                {(game.result !== "") && <div className=" flex flex-col md:flex-row justify-center items-center ">
                    <div className="flex-1 mx-4 flex flex-col justify-center items-center">
                        <h1 className="text-lg font-semibold pb-4 text-black">You:</h1>
                        <div className="result">
                            {(game.choice==="rock") &&
                            <h1><GiStoneBlock className="icon"/></h1>
                            }{(game.choice==="paper") &&
                            <h1><FaToiletPaper className="icon"/></h1>
                            }{(game.choice==="scissors") &&
                            <h1><GiWolverineClaws className="icon"/></h1>
                            }{(game.choice==="spock") &&
                            <h1><GiSpockHand className="icon"/></h1>
                            }{(game.choice==="lizard") &&
                            <h1><GiTRexSkull className="icon"/></h1>
                            }
                        </div>
                    </div>
                    <div className="hidden md:flex-1 md:flex md:flex-col justify-center items-center px-8 ">
                        <h1 className="pb-4 text-4xl text-black font-bold text-center">{game.result}</h1>
                        <button 
                        onClick={() => handleClick()}
                        className="w-full py-4 px-8 gradient__orange rounded-lg text-lg font-bold text-white">
                                <h1 className="text-xl text-black font-medium">Play again!</h1>
                        </button>
                    </div>
                    <div className="flex-1 mx-4 flex flex-col justify-center items-center">
                        <h1 className="text-lg font-semibold pb-4 text-black">Computer:</h1>
                        <div className="result">
                            {(game.compChoice==="rock") &&
                            <h1><GiStoneBlock className="icon"/></h1>
                            }{(game.compChoice==="paper") &&
                            <h1><FaToiletPaper className="icon"/></h1>
                            }{(game.compChoice==="scissors") &&
                            <h1><GiWolverineClaws className="icon"/></h1>
                            }{(game.compChoice==="spock") &&
                            <h1><GiSpockHand className="icon"/></h1>
                            }{(game.compChoice==="lizard") &&
                            <h1><GiTRexSkull className="icon"/></h1>
                            }
                        </div>
                    </div>
                </div>}
                <div className="md:hidden rounded-lg flex flex-col justify-center items-center">
                    <h1 className="pb-4 text-5xl text-black font-bold text-center">{game.result}</h1>
                    <button 
                    onClick={() => handleClick()}
                    className="py-4 px-8 gradient__orange rounded-lg text-lg font-bold text-white">
                            <h1 className="text-xl text-black font-medium">Play again!</h1>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ResultPop