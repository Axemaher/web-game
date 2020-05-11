import React, { useEffect } from 'react'
import styled from 'styled-components'
import MenuGame from '../MenuGame'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Barrack from '../Barrack'
import AddHero from '../AddHero'
import axios from 'axios'

const StyledDashboardPage = styled.div`
    padding: 0 0 0 0;
    font-size: 1.5em;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 0px;
`;

const StyledContainer = styled.div`
    grid-area: 1 / 2 / 2 / 6;
    font-size: 2em;
    color: white;
`;


const Base = () => {
    return (<>Base</>);
}


const Dashboard = () => {

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     const url_cors = 'https://cors-anywhere.herokuapp.com/';
    //     axios({
    //         method: 'get',
    //         url: url_cors + 'http://185.36.169.227:5088/api/base-camp',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //             'Authorization': token,
    //             'access-control-allow-credentials': "true",
    //             'access-control-allow-origin': '*',
    //             'crossdomain': 'true'
    //         }
    //     })
    //         .then(response => {
    //             console.log(response)

    //         })
    //         .catch(error => {
    //             console.log(error)

    //         });
    // }, [])

    return (
        <StyledDashboardPage>
            <Router>
                <>
                    <MenuGame />
                    <StyledContainer>
                        <Switch>
                            <Route path="/dashboard/barrack/">
                                <Barrack />
                            </Route>
                            <Route path="/dashboard/">
                                <AddHero />
                            </Route>
                            <Route path="/addHero/">
                                <AddHero />
                            </Route>
                        </Switch>
                    </StyledContainer>
                </>
            </Router>
        </StyledDashboardPage>
    );
}

export default Dashboard;