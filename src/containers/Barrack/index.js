import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FrameHeavy from '../../components/Frames/FrameHeavy'
import ButtonLight from '../../components/Buttons/ButtonLight'

const StyledWrapper = styled.div`
    color: white;
    font-size: 1.3rem;
    display: flex;
`;

const StyledHeroTile = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Barrack = () => {
    return (
        <>
            Barrack
            <StyledWrapper>
                <FrameHeavy>
                    <StyledHeroTile>
                        <Link to="/addHero">
                            <ButtonLight>add new hero</ButtonLight>
                        </Link>
                    </StyledHeroTile>
                </FrameHeavy>
            </StyledWrapper>
        </>
    );
}

export default Barrack;