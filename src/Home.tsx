import "./Home.css";
import logoWhite from "./assets/Logo_White_PNG.png";
import logoOrange from "./assets/Logo_Orange_Outline_PNG.png";
import { useEffect, useState } from "react";
import person1 from './assets/klaudia.png';
import person2 from './assets/Zosia.png';

const Home = () => {

  const [isHovered, setIsHovered] = useState(false); //efekty
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
  
//kalkulator

  return (
    <>

    <div className="home-container">
       <img
        src={isHovered ? logoOrange : logoWhite}
        alt="Loose Goose Studios logo"
        className="logo"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} //swiecace logo
      />
      <h2 className="slogan">Creative minds in flight.</h2> 
    </div> 

    <div className="divider">
    </div> 

    <div className="countdown-container"> 
        <div className="countdown"> 
          <p>
            {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s 
          </p>
        </div>
    </div>

    <div className="divider">
    </div>

    <div className="home-us">
      <h1 className="home-us-title">MEET OUR TEAM</h1>
        
          <div className="home-us-member">
                <img src={person1} alt="Osoba 1" className="member-img" />    
          </div>

          <div className="home-us-member">
                <img src={person2} alt="Osoba 2" className="member-img2" />     
          </div>

    <div className="divider-white">
    </div>

    </div>

    </>
    
  );
};

export default Home;