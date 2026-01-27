import React, { useEffect } from 'react';
import './Preloader.css';
import { preLoaderAnim } from './animations'; // We'll create a simple animation script or just use CSS

const Preloader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);

    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Developer</span>
                <span>Curator</span>
                <span>Vibe.</span>
            </div>
        </div>
    );
};

export default Preloader;
