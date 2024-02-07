import { useGameContext } from "../../context/GameContext";
import "./cursorImage.css";
import waterBottleImg from "../../assets/cursorImages/bottle-trans.png";
import bookImg from "../../assets/cursorImages/book.png";
export const CursorImage = () => {
  const { interaction } = useGameContext();

  //depending on interaction, show correct image
  return (
    <div className="cursor-img-container">
      {/* {interaction === "FEED" ? (
        <img className="cursor-img" alt="cursorImage" src={waterBottleImg} />
      ) : interaction === "EDUCATE" ? (
        <img className="cursor-img" alt="cursorImage" src={bookImg} />
      ) : ( */}
      <div></div>
      {/* )} */}
    </div>
  );
};
