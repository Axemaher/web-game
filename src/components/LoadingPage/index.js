import React from 'react'
import styled from "styled-components"
import LoadingSpinner from '../LoadingSpinner'

const StyledLoadingPage = styled.div`
    width: 100%;
    height: calc(100vh);
    background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
`;

const LoadingPage = () => {
    return (<StyledLoadingPage ><LoadingSpinner /></StyledLoadingPage>);
}

export default LoadingPage;