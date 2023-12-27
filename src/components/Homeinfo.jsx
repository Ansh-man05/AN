import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  const textStyle = {
    opacity: 0.8, // Set the opacity value here (0 to 1)
  };
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'style={textStyle}>
        Hey Love 💗
        <br />
        Long Time No See
        
        
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'style={textStyle}>
          Meeting you was the best part of 2023
      
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn' style={textStyle}>
          Heart
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'style={textStyle}>
          And I hope there are never any 
          <br />goodbyes between us
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'style={textStyle}>
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
          Soul
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;