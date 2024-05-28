import { VerticalIcons } from "./verticalIcons/VerticalIcons";
import PanoIcons from "./panoIcons/PanoIcons";

const SceneIcons = ({ currentFloor, openPano }) => {
  return (
    <>
      <VerticalIcons currentFloor={currentFloor}/>
      <PanoIcons currentFloor={currentFloor} openPano={openPano}/>
    </>
  );
}

export default SceneIcons;