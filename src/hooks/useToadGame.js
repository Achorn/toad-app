import { useToadContext } from "./useToadContext";
import { useGameContext } from "../context/GameContext";
import { useUpdateToad } from "./useToad";

export const useToadGame = () => {
  const { interaction, setInteraction } = useGameContext();
  const { toad } = useToadContext();
  const { updateToad } = useUpdateToad();
  const handleSetInteraction = (input) => {
    setInteraction(input);
    console.log(interaction);
  };
  const feedToad = () => {
    const updatedToad = { ...toad };
    updatedToad.water_points = updatedToad.water_points + 1;
    updatedToad.last_feeding = new Date();
    updateToad(toad, updatedToad);

    setInteraction(null);
  };
  const educateToad = () => {
    const updatedToad = { ...toad };
    updatedToad.education_points = updatedToad.education_points + 1;
    updatedToad.last_lesson = new Date();
    updateToad(toad, updatedToad);

    setInteraction(null);
  };
  const petToad = () => {};

  const interactWithToad = () => {
    switch (interaction) {
      case "FEED":
        feedToad();
        break;
      case "EDUCATE":
        educateToad();
        break;
      default:
        petToad();
        break;
    }
  };
  return { interaction, handleSetInteraction, interactWithToad, toad };
};
