import { useState } from 'react'
import './App.css'
import Player from './Player'

function App() {
  // definimos variables de estado
  const [score, setScore] = useState([8, 17])
  const [currentScore, setCurrentScore] = useState(0)
  const [activePlayer, setActivePlayer] = useState(0)
  const [dice, setDice] = useState(0)

  // funciones
  // Nuevo juego - Reiniciar juego
  const handleNewGame = () => {
    setScore([0, 0])
    setCurrentScore(0)
    setActivePlayer(0)
    setDice(0)
  }
  const handleRollDice = () => {
    // obtener num aleatorio entre 1 y 6
    const diceNumber = Math.trunc(Math.random() * 6) + 1
    setDice(diceNumber)
    // muestro el dado correspondiente
    // aumento el currentScore
    setCurrentScore(currentScore + diceNumber)
  }
  // TODO
  const handleHold = () => {
    // actualiza el score del jugador activo
    //score[activePlayer] += currentScore
    const newScore = [...score]
    newScore[activePlayer] += currentScore
    setScore(newScore)
    // resetear el current score y cambia de jugador
    setCurrentScore(0)
    setActivePlayer(activePlayer === 0 ? 1 : 0)
  }

  //código JS
  //en el return se pinta el html con 1 solo elemento padre
  return (
    <main>
      <Player
        name="Player 1"
        score={score[0]}
        currentScore={activePlayer === 0 && currentScore}
        isActive={activePlayer === 0}
      />
      <Player
        name="Player 2"
        score={score[1]}
        currentScore={activePlayer === 1 && currentScore}
        isActive={activePlayer === 1}
      />

      {dice && (
        <img
          src={`/images/dice-${dice}.png`}
          alt="Playing dice"
          className="dice"
        />
      )}
      <button className="btn btn--new" onClick={handleNewGame}>
        🔄 New game
      </button>
      <button className="btn btn--roll" onClick={handleRollDice}>
        🎲 Roll dice
      </button>
      <button className="btn btn--hold" onClick={handleHold}>
        📥 Hold
      </button>
    </main>
  )
}

export default App
