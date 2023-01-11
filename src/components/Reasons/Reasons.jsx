import React from 'react';
import "./Reasons.css";
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import nike from '../../assets/nike.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
const Reasons = () => {
  return (
    <div className='Reason'>
        <div className="left-side">
            
            <img src={image1} alt="" srcset="" />

        
            
            <img src={image2} alt="" srcset="" />
            <img src={image3} alt="" srcset="" />
            <img src={image4} alt="" srcset="" />
          
           
        </div>
        <div className="right-side">
            <span>some Reasons</span>
            <div className='why'>
              <span className="stroke-text">why</span>
              <span>choose us?</span>
              </div>
              <div className="details-r">
                <div><img src={tick} alt="" />
                <span className='detail-text'>Over 10+ Expert Coaches</span></div>
                <div><img src={tick} alt="" />
                <span className='detail-text'>Train smarter and faster than before</span></div>
                <div><img src={tick} alt="" />
                <span className='detail-text'>1 week free for new member</span></div>
                <div><img src={tick} alt="" />
                <span className='detail-text'> reliable partners</span>
               </div>
              </div>
              <div className="partners">
                <div>
                <span>OUR PARTNERS</span>

                </div>
                <div>
                <img src={nike} alt="" />
               <img src={nb}alt="" />
               <img src={adidas} alt="" />
                </div>
            
              </div>
        </div>
    </div>
  )
}

export default Reasons