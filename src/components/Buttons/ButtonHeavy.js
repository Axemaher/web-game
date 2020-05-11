import React from 'react'
import styled from 'styled-components'
import ButtonHeavyBg from '../../images/ButtonHeavyBg.png'

const StyledButton = styled.button`
    color: white;
    background: transparent;
    border-style: solid;
    cursor: pointer;
    margin-top: 30px;
    border-width: 20px 20px 22px;
    -moz-border-image: url(${ButtonHeavyBg}) 20 20 22 repeat stretch;
    -webkit-border-image: url(${ButtonHeavyBg}) 20 20 22 repeat stretch;
    -o-border-image: url(${ButtonHeavyBg}) 20 20 22 repeat stretch;
    border-image: url(${ButtonHeavyBg}) 20 20 22 fill repeat stretch;
    opacity: .9;
    transition: all .2s;
    width: 160px;
    margin: 20px auto 0 auto;
    &:hover{
        opacity: 1;
    }
`;

const ButtonHeavy = ({ children }) => {
    return (
        <StyledButton>{children}</StyledButton>
    );
}

export default ButtonHeavy;