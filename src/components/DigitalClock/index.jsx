import { useDigitalClock } from "./talons/useDigitalClock";
import './index.css';

const DigitalClock = () => {
  const { seconds, minutes, hours } = useDigitalClock();

  return <div className="digital-clock__wrapper">
    <div className="digital-clock__box">{hours}</div>
    <div className="digital-clock__box">:{minutes} </div>
    <div className="digital-clock__box">:{seconds}</div>
  </div>
}

export default DigitalClock;