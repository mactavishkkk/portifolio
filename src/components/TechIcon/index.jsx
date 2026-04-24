import React from 'react';
import { ReactSVG } from 'react-svg';

const TechIcon = ({ iconUrl }) => {
    if (!iconUrl) {
        return null;
    }

    return (
        <ReactSVG
            src={iconUrl}
            beforeInjection={(svg) => {
                svg.setAttribute('width', '3rem');
                svg.setAttribute('height', '3rem');
                const caminhoPrincipal = svg.querySelector('path');

                if (caminhoPrincipal) {
                    caminhoPrincipal.setAttribute('fill', '#ffff');
                }
            }}
        />
    );
};

export default TechIcon;
