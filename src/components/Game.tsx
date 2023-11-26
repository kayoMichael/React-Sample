interface Properties {
  name: any[];
  onClick: () => void;
}
function Game({ onClick, name }: Properties) {
  return (
    <>
      <div>{name}</div>
      <button type="button" onClick={onClick} className="btn btn-primary">
        Change
      </button>
    </>
  );
}

export default Game;
