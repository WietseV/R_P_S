import { Game } from "./gameHandler"
import  useSWR from "swr"

const fetcher = (url: string) => fetch(url).then(res => res.json())


export default function GameInfo(game: Game){

    // const { data: game, isLoading, error } = useSWR<Game>('/api/game', fetcher);

    // if (isLoading ) {
    //     return (
    //         <div>
    //             <h1>loading...</h1>
    //         </div>
    //     )
    // }if (!game ) {
    //     return (
    //         <div>
    //             <h1>{error}</h1>
    //         </div>
    //     )
    // }

    return (
            <div className="w-full rounded-xl p-8 flex flex-col justify-items-center gap-8 border-2 border-black border-opacity-80">
                <div className=" flex justify-center items-center">
                    <div className="flex-1 flex flex-col justify-center items-center gap-4 ">
                        <div>{game.type}</div>
                        <div className="w-full p-4 gradient__orange rounded-lg text-xl text-black font-medium flex justify-between">
                            <h1>Wins: </h1>
                            <h1>{game.wins}</h1>
                        </div>
                        <div className="w-full p-4 gradient__orange rounded-lg text-xl text-black font-medium flex justify-between">
                            <h1>Losses: </h1>
                            <h1>{game.losses}</h1>
                        </div>
                        <div className="w-full p-4 gradient__orange rounded-lg text-xl text-black font-medium flex justify-between">
                            <h1>Ties: </h1>
                            <h1>{game.ties}</h1>
                        </div>
                    </div>
                </div>
            </div>
    );
}