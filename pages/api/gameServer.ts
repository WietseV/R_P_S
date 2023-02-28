import type { NextApiRequest, NextApiResponse } from 'next'
import { gameInstance } from '../../app/gameLogic'

type Game = {
  type: string
  result: string
  choice: string
  compChoice: string
  wins: number
  losses: number
  ties: number
  w: number
  l: number
  t: number
} 
//for rpsls gamemode
var games = 0
var wins = 0
var ties = 0
var losses = 0
//for rps gamemode
var w = 0
var t = 0
var l = 0

export default function handler(req: NextApiRequest,res: NextApiResponse<Game>) { 
  var game = gameInstance 
  var type = 'rpsls'
 

  if (req.method === 'POST') {
    if (req.body.reset === true){
      game.reset()
    }if (req.body.resetScore === true){
      wins = 0
      ties = 0
      losses = 0
      w = 0
      t = 0
      l = 0
    }if (req.body.score === true){
      if (req.body.result === "YOU WIN") {
        w = w + 1
      }
      if (req.body.result === "YOU LOSE") {
        l = l + 1
      }
      if (req.body.result === "YOU TIE") {
        t = t + 1
      }
    }if (req.body.typeSet === true) {
      type = req.body.type
    }if (req.body.play === true) {
      game = gameInstance
      game.setType(type)
      game.play(req.body.choice)
      games = games + 1
      if (game.result === "YOU WIN") {
        wins = wins + 1
      }
      if (game.result === "YOU LOSE") {
        losses = losses + 1
      }
      if (game.result === "YOU TIE") {
        ties = ties + 1
      }
    }
  }
  res.status(200).json({ type: game.type, result: game.result, choice: game.choice, compChoice: game.compChoice, wins: wins, losses: losses, ties: ties, w: w, l: l, t: t})
  // console.log(games, " games ", wins, " wins", losses, " losses", ties, " ties")
}
