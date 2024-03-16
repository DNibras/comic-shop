import { useContext } from "react";
import { uiContext } from "../../Contexts";
import "./style.css";

const BackgroundShadow = () => {
  const { isBackgroundShadowActive: isActive } = useContext(uiContext);


  return (
    <div className={"background-shadow " + (isActive ? "background-shadow_active" : "")}></div>
  )
}

export default BackgroundShadow
