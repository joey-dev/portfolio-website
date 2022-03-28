import React, { useState } from 'react';
import styled from 'styled-components';


const StyledImg = styled.img`
    height: 40px;
    margin: 5px;
`;

const LanguageSelector: React.FC = () => {
    const [currentSelected, setCurrentSelected] = useState(0);
    const flags = [
        'nl',
        'us',
    ];

    return (
        <>
            {
                flags.map(flag => (
                    <StyledImg src={`images/flags/${flag}.svg`} alt={flag} />
                ))
            }
        </>
    );
};

export default LanguageSelector;
