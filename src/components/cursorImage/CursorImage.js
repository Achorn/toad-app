import { useGameContext } from "../../context/GameContext";
import "./cursorImage.css";
import waterBottleImg from "../../assets/cursorImages/bottle-trans.png";
import bookImg from "../../assets/cursorImages/book.png";
import { useEffect, useState } from "react";

export const CursorImage = () => {
  const { interaction } = useGameContext();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleWindowMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  return interaction !== null ? (
    <div
      className="cursor-img-container"
      style={{ top: coords.y + -20 + "px", left: coords.x + -20 + "px" }}
    >
      {interaction === "FEED" ? (
        <img className="cursor-img" alt="cursorImage" src={waterBottleImg} />
      ) : interaction === "EDUCATE" ? (
        <img className="cursor-img" alt="cursorImage" src={bookImg} />
      ) : (
        <div></div>
      )}
    </div>
  ) : (
    <div></div>
  );
};
