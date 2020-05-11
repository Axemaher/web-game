import React from 'react'
import styled from 'styled-components'
import ButtonLightBg from '../../images/ButtonLightBg.png'

const StyledButton = styled.button`
    text-align: center;
    border-style: solid;
    background: transparent;
    border-width: 12px 12px 12px 11px;
    -moz-border-image: url(${ButtonLightBg}) 12 12 12 11 repeat stretch;
    -webkit-border-image: url(${ButtonLightBg}) 12 12 12 11 repeat stretch;
    -o-border-image: url(${ButtonLightBg}) 12 12 12 11 repeat stretch;
    border-image: url(${ButtonLightBg}) 12 12 12 11 fill repeat stretch;
    color: white;
    cursor: pointer;
    opacity: .7;
    &:hover{
        opacity: 1;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
`;

const ButtonIco = ({ children, onClick, active }) => {
    return (
        <StyledButton onClick={onClick} active={active}>{children}</StyledButton>
    );
}

export default ButtonIco;