import React, { useEffect, useState } from "react";
import "../App.css";
import "../style/Advice.css"
import Dice from "../assets/icon-dice.svg";
import Pattern from "../assets/pattern-divider-mobile.svg";
import pattern from "../assets/pattern-divider-desktop.svg";
const Advice = () => {
  const [advice, setAdvice] = useState(" ");

  const fetchAdvice = async () => {
    try {
      const request = await fetch("https://api.adviceslip.com/advice");
      const response = await request.json();
      console.log(response);
      setAdvice({ id: response.slip.id, text: response.slip.advice });
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
      <main className="wrapper box">
          <div className="card" >
              <h4>ADVICE #{advice.id} </h4>
              <p className="w-100">{advice.text}</p>
              <div className="pattern ">
                <img src={pattern} alt="" className="pattern-img" />
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
