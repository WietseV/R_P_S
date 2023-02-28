'use client'

import { Game } from "./gameHandler"
import { AiOutlineHome } from 'react-icons/ai'
import { VscDebugRestart } from 'react-icons/vsc'


export default function GameInfo(game: Game, type: string, handleRules: Function, handleHome: Function, handleResetScore: Function){

    return (
        <div className="w-full flex ">
            <div className="w-full rounded-xl p-8 flex flex-col justify-items-center gap-8 border-2 border-black border-opacity-80">
                <div className=" flex justify-center items-center">
                    <div className="flex-1 flex flex-col justify-center items-center gap-4 ">
                        <div className="w-full flex justify-between items-center px-4 text-white">
                            <p className="uppercase ">{type}</p>
                            <button onClick={() => handleResetScore()} className="transition  hover:rotate-90"><VscDebugRestart /></button>
                        </div>
                        <div className="w-full p-4 gradient__orange rounded-lg text-xl text-black font-medium flex justify-between">
                            <h1>Wins: </h1>
                            <h1>{type==="rpsls" ? game.wins : game.w}</h1>
                        </div>
                        <div className="w-full p-4 gradient__orange rounded-lg text-xl text-black font-medium flex justify-between">
                            <h1>Losses: </h1>
                            <h1>{type==="rpsls" ? game.losses : game.l}</h1>
                        </div>
                        <div className="w-full p-4 gradient__orange rounded-lg text-xl text-black font-medium flex justify-between">
                            <h1>Ties: </h1>
                            <h1>{type==="rpsls" ? game.ties : game.t}</h1>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="absolute bottom-0 right-0 p-8 flex gap-2 text-white">
                <button className="px-4 py-2 border-2 border-black border-opacity-80 rounded-lg"
                onClick={() => handleRules()}>Rules</button>
                <button 
                className="px-4 py-2 border-2 border-black border-opacity-80 rounded-lg text-xl"
                onClick={() => handleHome()}><AiOutlineHome/></button>
            </div>
        </div>
    );
}