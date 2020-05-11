import React from 'react'
import styled from 'styled-components'
import frame from '../../images/frame.png';



export const StyledFrameWrapper = styled.div`
    @media ${({ theme }) => theme.device.mobileL} {
        width: 100%;
    }
    border-style: solid;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-width: 19px 17px 19px 19px;
    -moz-border-image: url(${frame}) 19 17 19 19 repeat stretch;
    -webkit-border-image: url(${frame}) 19 17 19 19 repeat stretch;
    -o-border-image: url(${frame}) 19 17 19 19 repeat stretch;
    border-image: url(${frame}) 19 17 19 19 fill repeat stretch;
    color: white;
    display: flex;
    flex-direction: column;
    height: fit-content;
`;

export const StyledFrame = styled.div`
    width: calc(100% - 5px);
    height: calc(100% - 5px);
    background-color: transparent;
    padding: 10px;
    background: rgb(236,236,236);
    background: radial-gradient(circle, rgb(43, 43, 43) 11%, rgba(0,0,0,0) 59%);
    @media ${({ theme }) => theme.device.mobileL} {
        padding: 10px;
    }
`;

const FrameHeavy = ({ children }) => {
    return (
        <StyledFrameWrapper>
            {children}
        </StyledFrameWrapper>
    );
}

export default FrameHeavy;