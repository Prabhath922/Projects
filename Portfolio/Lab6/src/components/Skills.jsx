import React, { useState, useEffect } from 'react';
import { skillsArray } from './Backend/projects';
import SkillsSearch from './SkillsSearch';
export default function SkillsList() {
  const [currentSkill, setCurrentSkill] = useState(skillsArray[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % skillsArray.length);
      setCurrentSkill(skillsArray[(index + 1) % skillsArray.length]);
    }, 2000); // Change skill every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [index]);

  return (
    <div className='skills'>
        <h2>Skills:</h2>
    <div className="skills-container">
      <div className="spinning-text">{currentSkill}</div>
        </div>
    </div>
  );
}
