import React from 'react';
import { ReactSVG } from 'react-svg';

const TechIcon = ({iconUrl}) => {
    return (
        <ReactSVG
            src={iconUrl}
            beforeInjection={(svg) => {
                svg.setAttribute('width', '3rem');
                svg.setAttribute('height', '3rem');
                svg.querySelector('path').setAttribute('fill', '#ffff');
            }}
            wrapper="span"
        />
    );
};

export default TechIcon;
