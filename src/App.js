import React, {useState, useEffect} from 'react'

import './App.css'
import {Main} from './containers'
import {GameContext} from './contexts'
import {LevelsEnum} from './utils'

const App = () => {
  const [gameOver, setGameOver] = useState(false)
  const [gameWon, setGameWon] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [level, setLevel] = useState('beginner')
  const [numberOfRemainingMines, setNumberOfRemainingMines] = useState(LevelsEnum[level].numberOfMines)
  const [bestTimes, setBestTimes] = useState({beginner: 999, intermediate: 999, expert: 999})
  const [gameTime, setGameTime] = useState(0)
  const [resetGame, setResetGame] = useState(false)

  const value = {
    gameOver,
    setGameOver,
    gameWon,
    setGameWon,
    gameStarted,
    setGameStarted,
    level,
    setLevel,
    numberOfRemainingMines,
    setNumberOfRemainingMines,
    bestTimes,
    setBestTimes,
    gameTime,
    setGameTime,
    resetGame,
    setResetGame
  }

  useEffect(()=>{
    const bestTimes = localStorage.getItem('mineSweeperScores')
    if(bestTimes) {
      setBestTimes(JSON.parse(bestTimes))
    }
  }, [])

  return (
    <div className="App">
      <GameContext.Provider value={value}>
        <Main />
      </GameContext.Provider>     
    </div>
  );
}

export default App;
