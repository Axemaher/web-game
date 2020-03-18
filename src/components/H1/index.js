import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1`
    font-size: 2em;
    padding-bottom: 20px;
`;

const H1 = ({ children }) => {
    return (<StyledH1>{children}</StyledH1>);
}

export default H1;