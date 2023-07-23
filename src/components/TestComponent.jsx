const TestComponent = ({ elem }) => {
  return (
    <>
      <h2>{elem.game_title}</h2>
      <img src={elem.game_img} />
    </>
  );
};

export default TestComponent;
