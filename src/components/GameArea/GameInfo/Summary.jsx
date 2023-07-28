import { useEffect } from "react";

const Summary = ({ infoData }) => {
  const summ = infoData[0].about_this_game;
  const split = summ.split("\\");

  return (
    <div>
      <p id='summary'>{split[0]}</p>
    </div>
  );
};

export default Summary;
