import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Square } from './components/Square';
import { TURNS } from './constants';
import { validarGanador } from './logic/board';
import { WinnerModal } from './components/WinnerModal';
import { checkEndGame } from './logic/board';
import { Hijo } from './components/Hijo';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);
  const [a, setA] = useState('');

  const mostrarMensajeEnviado = (vars) => {
    console.log('Padre');
    console.log(vars);
    setA(vars);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const actualizarTablero = (index) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = TURNS.X === turn ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = validarGanador(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <>
      <main className="board">
        <h1>Michi-Prueba {`${a}`}</h1>
        <section className="game">
          {board.map((b, index) => {
            return (
              <Square key={index} index={index} actualizarBoard={actualizarTablero}>
                {board[index]}
              </Square>
            );
          })}
        </section>

        <section className="turn">
          <Square isSelected={TURNS.X === turn}>{TURNS.X}</Square>
          <Square isSelected={TURNS.O === turn}>{TURNS.O}</Square>
        </section>

        <section>
          <Hijo subiendoNivel={mostrarMensajeEnviado}></Hijo>
        </section>

        <WinnerModal winner={winner} reinicarJuego={resetGame} />
      </main>
    </>
  );
}

export default App;
