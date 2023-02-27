'use client'

export default function GameInfo(){
    return (
            <div className="w-full rounded-xl p-8 flex flex-col justify-items-center gap-8 border-2 border-black border-opacity-80">
                <div className=" flex justify-center items-center">
                    <div className="flex-1 flex flex-col justify-center items-center gap-4 ">
                        <div>Rock, Paper, Scissors</div>
                        <div className="w-full p-4 gradient__orange rounded-lg text-xl text-black font-medium flex justify-between">
                            <h1>Wins: </h1>
                            <h1>{localStorage.getItem("wins")}</h1>
                        </div>
                        <div className="w-full p-4 gradient__orange rounded-lg text-xl text-black font-medium flex justify-between">
                            <h1>Losses: </h1>
                            <h1>{localStorage.getItem("losses")}</h1>
                        </div>
                        <div className="w-full p-4 gradient__orange rounded-lg text-xl text-black font-medium flex justify-between">
                            <h1>Ties: </h1>
                            <h1>{localStorage.getItem("ties")}</h1>
                        </div>
                    </div>
                </div>
            </div>
    );
}