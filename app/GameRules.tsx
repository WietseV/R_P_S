import { AiOutlineClose } from 'react-icons/ai'


export default function GameRules(props: {type: string, showRules: Boolean, handleRules: Function}){
    return (
        <div className={!props.showRules ? "hidden" : "w-screen min-h-screen top-0 left-0 fixed bg-black bg-opacity-40 flex flex-col justify-center items-center z-20"}>
            <div className={` max-w-5xl relative rounded-xl m-2 p-8 md:px-16 flex flex-col justify-items-center gap-8 border-2 border-black border-opacity-80 bg-white bg-opacity-90`}>
            
                <div className=" flex flex-col justify-center items-center ">
                    {props.type === 'rps' &&
                    <div>
                        <h1 className="pb-4 text-xl md:text-5xl text-black font-bold text-center">Rock, Paper, Scissors</h1>
                        <p className="text-center">Following the traditional rules of the game: Rock beats scissors, scissors beat paper and paper beats rock.<br/> <br/>
                        Click on one of the 3 options and the game will randomly pick an option as well. Based on the rules of the game you will then either win, lose or tie.
                        </p>
                    </div>
                    }
                    {props.type === 'rpsls' &&
                    <div>
                        <h1 className="pb-4 text-xl md:text-5xl text-black font-bold text-center">Rock, Paper, Scissors, Lizard, Spock</h1>
                        <p className="text-center text-sm md:text-base">This variation on the original game was made popular by the television show <q>The Big Bang Theory</q><br/> <br/>
                        </p>
                        <div className="flex flex-col md:flex-row justify-between">
                            <p className="text-sm md:text-base">With the addition of lizard and Spock to the options, determining the result of the outcome is a bit more extensive:<br/> <br/></p>
                            <ul className=" list-disc mx-8 text-sm md:text-base">
                                <li>rock crushes scissors and lizard</li>
                                <li>paper covers rock and disproves Spock</li>
                                <li>scissors cut paper and decapitate lizard</li>
                                <li>lizard eats paper and poisons Spock</li>
                                <li>Spock vaporizes rock and smashes scissors</li>
                            </ul>
                        </div> <br/> <br/>
                        <p className="text-center text-sm md:text-base">Click on one of the 5 options and the game will randomly pick an option as well. Based on the rules of the game you will then either win, lose or tie.</p>
                    </div>
                    }
                    <button 
                    onClick={() => props.handleRules()}
                    className="absolute top-2 right-2  text-lg font-bold text-white">
                        <h1 className="text-xl text-black font-medium"><AiOutlineClose/></h1>
                    </button>
                </div>
        </div>
    </div>
    );
}