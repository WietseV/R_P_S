// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { gameInstance } from '../../app/game'

type Game = {
  type: string
  result: string
  choice: string
  compChoice: string
  wins: number
  losses: number
  ties: number
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
      console.log(game.result)
    }
  }
  res.status(200).json({ type: game.type, result: game.result, choice: game.choice, compChoice: game.compChoice, wins: game.wins, losses: game.losses, ties: game.ties})
}
