export const Square = ({ children, index, isSelected, actualizarBoard }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;

  const handleClick = () => {
    return actualizarBoard(index);
  };

  return (
    <div
      className={className}
      onClick={() => {
        actualizarBoard(index);
      }}>
      {children}
    </div>
  );
};
