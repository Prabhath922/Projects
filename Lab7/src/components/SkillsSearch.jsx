import React, { useState } from 'react';
import { skillsArray } from '../Backend/projects';
export default function App() {
    
    const [skills, setskills] = useState(skillsArray);
    const [searchVal, setSearchVal] = useState("");
    function handleSearchClick() {
        if (searchVal === "") { setskills(skillsArray); return; }
        const filterBySearch = skillsArray.filter((item) => {
            if (item.toLowerCase()
                .includes(searchVal.toLowerCase())) { return item; }
        })
        setskills(filterBySearch);
    }
    return (
        <div>
            <div className='Skills'>
                <input type='Search' placeholder='Search for skill' className='searchBar' onChange={e => setSearchVal(e.target.value)}>
                </input>
                <button type='Submit' onClick={handleSearchClick}>Search</button>
            </div>
            <div>
                {skills.map((skills) => {
                    return (
                      <h5>
                        <div>{skills}</div>
                      </h5>
                    )
                })
                }
            </div>
        </div>
    );
}

