import { useEffect, useState } from "react";
import "./Games.css";
import TOL from "./assets/text-1755433995102.png";

const Games = () => {

  const calculateTimeLeft = () => {
    const targetDate = new Date("2027-10-27T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

return (
    
  <>

    <div className="games-container">
      <img className="TOL" src={TOL} alt="TOL" />
       <h2 className="slogan">Coming Soon</h2>
    </div>  

    <div className="countdown-container"> 
        <div className="countdown"> 
          <p>
            {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s 
          </p>
        </div>
        
    </div>

    </>
    
  );
};


export default Games;