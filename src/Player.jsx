// variables de estado: score [0-10], current, activePlayer [0,1]
// funciones: switchPlayer, rollDice, holdScore

import { useState } from 'react'
import './Player.css'

function Player(props) {
  const { isActive, name, score, currentScore } = props
  // quitamos los id ya que no los vamos a usar con React
  const classes = `player ${isActive ? 'player--active' : ''}`
  //const currentDEVerdad = props.isActive ? 'current' : 0
  return (
    <section className={classes}>
      <h2 className="name">{name}</h2>
      <p className="score">{score}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score">{currentScore || 0}</p>
      </div>
    </section>
  )
}
export default Player
