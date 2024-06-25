import React, { useEffect, useState } from "react";
import "../App.css";
import Dice from "../assets/icon-dice.svg";
import Pattern from "../assets/pattern-divider-mobile.svg";
const Advice = () => {
  const [advice, setAdvice] = useState(
    "It is easy to sit up and take notice, what is difficult is getting up and taking action"
  );

  const fetchAdvice = async () => {
    try {
      const request = await fetch("https://api.adviceslip.com/advice");
      const response = await request.json();
      console.log(response);
      setAdvice(response.slip.advice);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(advice);
 
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      <main className="wrapper">
        <div className="  box">
          <div className="card "  >
            <h4>ADVICE # {advice.id} </h4>

            <p>{advice}</p>
            <div className="pattern">
              <img src={Pattern} alt="" className="pattern-img" />
            </div>
          </div>

          <div className="dice">
            <button onClick={fetchAdvice}>
              <img src={Dice} alt="" className="dice-img" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Advice;
