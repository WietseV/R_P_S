export default async function GameHandler(){
    return getData()
}

export async function getData(){
    try {
        await fetch('/api/game').then((res) => res.json())
        .then((data) => {
            return data
        }).catch((err) => console.log(err))
    } catch (error) {
        console.log("error, couldnt fetch game data", error)
        return error
    }
    return null
}

export async function play(choice: string) {

    try {
        fetch('http://localhost:3000/api/game', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({play: true, choice: choice})
        }).catch((err) => console.log(err))
    } catch (error) {
        console.log("error, couldnt fetch data to play", error)
    }

    
}

export async function resetGame() {

    try {
        fetch('http://localhost:3000/api/game', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({reset: true})
        }).catch((err) => console.log(err))
    } catch (error) {
        console.log("error, couldnt fetch data to reset", error)
    }

    
}

export async function setType(type: string){

    try {
        fetch('http://localhost:3000/api/game', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({typeSet: true, type: type})
        }).catch((err) => console.log(err))
    } catch (error) {
        console.log("error, couldnt fetch data to set type", error)
    }
}

export type Game = {
    type: string
    result: string
    choice: string
    compChoice: string
    wins: number
    losses: number
    ties: number
  }