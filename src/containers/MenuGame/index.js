import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Frame from '../../components/Frames/FrameHeavy'

const StyledNav = styled.nav`
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    grid-area: 1 / 1 / 2 / 2;
`;

const StyledButton = styled(Link)`
    border: none;
    padding: 5px 20px 5px 20px;
    background: none;
    color: white;
    font-weight: bold;
    text-align: center;
    width: 100%;
    text-decoration: none;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
`;

const StyledLi = styled.li`
    display: flex;
    justify-content: center;
`;

const MenuGame = () => {

    const logOut = () => {
        localStorage.removeItem('token');
        window.location.replace("/");
    }

    return (
        <Frame>
            <StyledNav>
                <ul>
                    <StyledLi>
                        <StyledButton to="/dashboard/">BASE</StyledButton>
                    </StyledLi>
                    <StyledLi>
                        <StyledButton to="/dashboard/barrack">BARRACK</StyledButton>
                    </StyledLi>
                </ul>
                <StyledButton onClick={() => logOut()}>LOGOUT</StyledButton>
            </StyledNav>
        </Frame>
    );
}

export default MenuGame;