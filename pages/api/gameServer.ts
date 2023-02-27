import type { NextApiRequest, NextApiResponse } from 'next'
import { gameInstance } from '../../app/gameLogic'

type Game = {
  type: string
  result: string
  choice: string
  compChoice: string
}

export default function handler(req: NextApiRequest,res: NextApiResponse<Game>) { 
  const game = gameInstance 
  if (req.method === 'POST') {
    if (req.body.reset === true){
      game.reset()
    }if (req.body.typeSet === true) {
      game.setType(req.body.type)
    }if (req.body.play === true) {
      game.play(req.body.choice)
    }
  }
  res.status(200).json({ type: game.type, result: game.result, choice: game.choice, compChoice: game.compChoice})
}
