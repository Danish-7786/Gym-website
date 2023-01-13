import React from "react";
import "./Program.css"
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png"
const Program = () => {
  return (
    <div className="Program">
      <div className="program-heading">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">To shape you</span>
      </div>
      <div className="Program-card">
        {programsData.map((program)=>(
            <div className="card">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now">
                <span>Join Now </span>
<img src={RightArrow} alt="" />
                </div>
            </div>
        ))

        }
     
      </div>
    </div>
  );
};

export default Program;
