import React from 'react';
import Experience from '../components/knowledges/Experience';
import Hobbies from '../components/knowledges/Hobbies';
import Language from '../components/knowledges/Language';
import OtherSkills from '../components/knowledges/OtherSkills';
import Navigation from '../components/Navigation';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowledgesContent">
                <Language />
                <Experience />
                <OtherSkills />
                <Hobbies />
            </div>
            
        </div>
    );
};

export default Knowledges;