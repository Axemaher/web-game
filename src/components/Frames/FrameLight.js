import React from 'react'
import styled from 'styled-components'
import ButtonLightBg from '../../images/ButtonLightBg.png'

const StyledFrame = styled.button`
    border-style: solid;
    background: transparent;
    border-width: 12px 12px 12px 11px;
    -moz-border-image: url(${ButtonLightBg}) 12 12 12 11 repeat stretch;
    -webkit-border-image: url(${ButtonLightBg}) 12 12 12 11 repeat stretch;
    -o-border-image: url(${ButtonLightBg}) 12 12 12 11 repeat stretch;
    border-image: url(${ButtonLightBg}) 12 12 12 11 fill repeat stretch;
`;

const FrameLight = ({ children }) => {
    return (
        <StyledFrame>{children}</StyledFrame>
    );
}

export default FrameLight;