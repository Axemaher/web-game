import React from 'react'
import styled from 'styled-components'
import inputBg from '../../images/inputBg.png';

const StyledInput = styled.input`
    width: 100%;
    border-style: solid;
    background: transparent;
    border-width: 12px 12px 12px 11px;
    -moz-border-image: url(${inputBg}) 12 12 12 11 repeat stretch;
    -webkit-border-image: url(${inputBg}) 12 12 12 11 repeat stretch;
    -o-border-image: url(${inputBg}) 12 12 12 11 repeat stretch;
    border-image: url(${inputBg}) 12 12 12 11 fill repeat stretch;
    color: white;
    -webkit-text-security: ${({ password }) => password ? 'disc' : 'none'};
    text-security: ${({ password }) => password ? 'disc' : 'none'};    
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
        -webkit-transition-delay: 9999s;
    }
`;

const Input = ({ onChange, password }) => {
    return (
        <StyledInput onChange={onChange} password={password} />
    );
}

export default Input;