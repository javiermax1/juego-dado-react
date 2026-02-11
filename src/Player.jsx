// variables de estado: score [0-10], current, activePlayer [0,1]
// funciones: switchPlayer, rollDice, holdScore

import { useState } from 'react'
import './Player.css'

function Player(props) {
  // quitamos los id ya que no los vamos a usar con React
  const classes = `player ${props.isActive ? 'player--active' : ''}`
  //const currentDEVerdad = props.isActive ? 'current' : 0
  return (
    <section className={classes}>
      <h2 className="name">{props.name}</h2>
      <p className="score">{props.score}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score">{props.currentScore}</p>
      </div>
    </section>
  )
}
export default Player
