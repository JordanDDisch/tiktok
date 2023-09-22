import { useAnalogueClock } from "./talons/useAnalogueClock";
import './index.css';

const AnalogueClock = () => {
  const { hours, minutes, seconds } = useAnalogueClock();

  return <div className="clock">
    <div className="clock__hour-hand" style={{ transform: `rotate(${hours}deg)` }}></div>
    <div className="clock__minute-hand" style={{ transform: `rotate(${minutes}deg)` }}></div>
    <div className="clock__second-hand" style={{ transform: `rotate(${seconds}deg)` }}></div>
    <div className="clock__bottom-half"></div>
  </div>
}

export default AnalogueClock;