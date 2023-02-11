class Game{

    private static _instance: Game;
    public result
    public choice
    public compChoice
    public static choices = {1: "rock", 2: "paper", 3: "scissors"}
    public static choicesRPSLS = {1: "rock", 2: "paper", 3: "scissors", 4: "lizard", 5: "spock"}
    public static choicesLS = {1: "rock", 2: "paper", 3: "scissors", 4: "spock", 5: "lizard"}
    public static loseresults = {1: "rockpaper", 2: "paperscissors", 3: "scissorsrock", 4: "spockpaper", 5: "rockspock", 6: "scissorsspock", 7: "paperlizard", 8: "spocklizard", 9: "lizardrock", 10: "lizardscissors"}
    public static winresults = {1: "paperrock", 2: "scissorspaper", 3: "rockscissors", 4: "paperspock", 5: "spockrock", 6: "spockscissors", 7: "lizardpaper", 8: "lizardspock", 9: "rocklizard", 10: "scissorslizard"}
    public static tieresults = {1: "paperpaper", 2: "rockrock", 3: "scissorsscissors", 4: "spockspock", 5: "lizardlizard"}
    public wins
    public losses
    public ties
    public type

    private constructor() {
        this.type = "rps"
        this.result = ""
        this.choice = ""
        this.compChoice = ""
        this.wins = 0
        this.losses = 0
        this.ties = 0
    }
    public static get Instance(){
        return this._instance || (this._instance = new this())
    }
    
    public play(value: string) {
        const comp = this.pick(value) 
        this.compare(comp)
    }
    
    public pick(value: string) {
        const compPick = this.computerPick()
        this.setChoice(value);
        this.setCompChoice(compPick);
        return (value+compPick)
    }
    
    public computerPick() {
        if (this.type === "rps"){
            const index = Math.floor(Math.random() * 3);
            const value = Object.values(Game.choices)[index];
            return value as string
        } if (this.type === "rpsls") {
            const index = Math.floor(Math.random() * 5);
            const value = Object.values(Game.choicesRPSLS)[index];
            return value as string;
        }
        return ""
        
        
    }
    
    public compare(comp: string ) {
        if (Object.values(Game.loseresults).includes(comp)) {
            this.setLosses()
            return this.setResult("YOU LOSE")
        } if (Object.values(Game.winresults).includes(comp)) {
            this.setWins()
            return this.setResult("YOU WIN")
        } if (Object.values(Game.tieresults).includes(comp)) {
            this.setTies()
            return this.setResult("YOU TIE")
        } else {
            return this.setResult("ERROR")
        }
    }

    public setType(str: string){
        this.type = str
    }

    public setChoice(str: string){
        this.choice = str
    }

    public setCompChoice(str: string){
        this.compChoice = str
    }

    public setResult(str: string){
        this.result = str
    }

    public getResult(){
        return this.result
    }

    public setWins(){
        this.wins = this.wins + 1
    }

    public setLosses(){
        this.losses = this.losses + 1
    }

    public setTies(){
        this.ties = this.ties + 1
    }

    public reset(){
        this.setChoice('')
        this.setCompChoice('')
        this.setResult('')
    }

}

export const gameInstance = Game.Instance

