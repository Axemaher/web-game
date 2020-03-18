import React from 'react'
import styled, { keyframes } from "styled-components"
import spinner from '../../images/loading-circle.png'



const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const StyledLoadingSpinner = styled.div`
    z-index: 10;
      position: absolute;
      top: calc(50% - 80px);
      left: calc(50% - 80px);
      width: 160px;
      height: 160px;
      background-image: url(${spinner});
      background-size: contain;
      animation:${spin} 2s linear infinite;
`;



const LoadingSpinner = () => {
    return (<StyledLoadingSpinner />);
}

export default LoadingSpinner;