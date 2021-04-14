import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby"><i className="fas fa-music"></i>
                <span>Musique</span></li>
                <li className="hobby"><i className="fas fa-running"></i>
                <span>Sports de glisse (skate, surf, snow)</span></li>
                <li className="hobby"><i className="fas fa-gamepad"></i>
                <span>Jeux Vidéos</span></li>
                <li className="hobby"><i className="fas fa-camera-retro"></i>
                <span>Photographie</span></li>
                <li className="hobby"><i className="fas fa-utensils"></i>
                <span>Food</span></li>
            </ul>
        </div>
    );
};

export default Hobbies;