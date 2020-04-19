import React from 'react'
import styled from 'styled-components'
import MenuGame from '../MenuGame'

const StyledDashboardPage = styled.div`
    padding: 0 0 100px 0;
    font-size: 1.5em;
    min-height: 100vh;
    display: flex;
`;

const StyledContainer = styled.div`
    background-color: red;
    width: 100%;
`;


const Dashboard = () => {
    return (
        <StyledDashboardPage>
            <MenuGame />
            <StyledContainer>sdfsdfsd</StyledContainer>
        </StyledDashboardPage>
    );
}

export default Dashboard;