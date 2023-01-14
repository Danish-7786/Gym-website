import { useRef } from "react";
import React from "react";
import "./Join.css";
import emailjs  from "@emailjs/browser";

const Join = () => {
  const form = useRef();
 const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mzu7kwj', 'template_bjod41a', form.current, 'AlQYFnGIUwr-1xbx0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="Join">
      <div className="left-j">
        <div className="Join-oval"></div>
        <div>
          <span className="stroke-text">Ready to</span>
          <span>Level up</span>
        </div>

        <div>
          <span>Your Body</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
<div className="right-j">
  <form ref={form} action="post" onSubmit={sendEmail}>
        <input
          type="email"
          name="user-email"
          placeholder="Example123@gmail.com"
        />
        <button className="btn btn-j">Join now</button>
      </form>
</div>
      
    </div>
  );
};

export default Join;
