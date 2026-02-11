import { useState } from 'react'
import './App.css'
import Player from './Player'

function App() {
  // definimos variables de estado
  const [score, setScore] = useState([0, 0])
  const [currentScore, setCurrentScore] = useState(5)
  const [activePlayer, setActivePlayer] = useState(0)

  //código JS
  //en el return se pinta el html con 1 solo elemento padre
  return (
    <main>
      <Player
        name="Player 1"
        score={score[0]}
        currentScore={currentScore}
        isActive={activePlayer === 0}
      />
      <Player
        name="Player 2"
        score={score[1]}
        currentScore={currentScore}
        isActive={false}
      />

      <img src="/images/dice-5.png" alt="Playing dice" className="dice" />
      <button className="btn btn--new">🔄 New game</button>
      <button className="btn btn--roll">🎲 Roll dice</button>
      <button className="btn btn--hold">📥 Hold</button>
    </main>
  )
}

export default App
