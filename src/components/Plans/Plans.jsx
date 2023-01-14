import React from 'react'
import {plansData} from '../../data/plansData'
import './Plans.css'
import whiteTick from '../../assets/whiteTick.png'
import rightArrow from '../../assets/rightArrow.png'
const Plans = () => {
  return (
    <div className='Plan-container'>
      <div className="blur blur-p"></div>
        <div className="program-heading" style={{gap:'2rem'}}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
        </div>
   {/* plans card */}
   <div className="plans">
     {plansData.map((plan,i)=>(
      <div className="plan" key={i}>
        {plan.icon}
        <span className='plan-name'>{plan.name}</span>
        <span>$ {plan.price}</span>
<div className="features">
  {plan.features.map((feature,i)=>(
    <div className="feature">
      <img src={whiteTick} alt="" />
      <span key={i}>{feature}</span>
    </div>
  ))}
</div>
<div><span>See more benifits <img className='right-Arrow' src={rightArrow} alt="" /></span>
</div>
<button className="btn">Join Now</button>
      </div>

     ))}
         <div className="blur blur-bottom"></div>
    
   </div>
        </div>
     
  )
}

export default Plans