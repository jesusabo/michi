import { Square } from './Square';

export const WinnerModal = ({ winner, reinicarJuego }) => {
  if (winner === null) return null;

  return (
    <section className="winner">
      <div className="text">
        <h2>{winner ? 'Gano' : 'Empate'}</h2>
        <header>{winner && <Square>{winner}</Square>}</header>
        <button onClick={reinicarJuego}>Empezar de nuevo</button>
      </div>
    </section>
  );
};
