import React, { useState } from 'react'
import Layout from '../../Layout'
import styled from 'styled-components'
import RegisterModal from '../RegisterModal'
import LoginModal from '../LoginModal'
import axios from 'axios'


const StyledHomePage = styled.div`
    padding: 0 0 100px 0;
    font-size: 1.5em;
`;

const StyledHomeWrapper = styled.div`
    display: block;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
`;

const StyledMenu = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    padding: 10px 0;
`;

const StyledMenuGroup = styled.ul`
    list-style: none;
    display: flex;
`;

const StyledMenuLink = styled.li`

`;

const StyledMenuHref = styled.a`
    border: 1px solid gray;
    border-radius: 4px;
    padding: 5px 20px 5px 20px;
`;

const StyledMenuButton = styled.button`
    border: 1px solid gray;
    border-radius: 4px;
    padding: 5px 20px 5px 20px;
    background: none;
    margin-left: 20px;
`;



const Home = () => {

    const [modal, setModal] = useState({ showRegisterModal: false, showLoginModal: false })


    const token = localStorage.getItem('token');
    const url_cors = 'https://cors-anywhere.herokuapp.com/';

    const handleSendToken = e => {
        e.preventDefault();

        axios({
            method: 'get',
            url: url_cors + 'http://185.36.169.227:5088/api/user',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': token,
                'access-control-allow-credentials': "true",
                'access-control-allow-origin': '*',
                'crossdomain': 'true'
            }
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });
    }


    return (
        <Layout>
            <StyledHomePage>
                <StyledHomeWrapper>
                    <StyledMenu>
                        <StyledMenuGroup>
                            <StyledMenuLink>
                                <StyledMenuHref onClick={(e) => handleSendToken(e)}>LOGO</StyledMenuHref>
                            </StyledMenuLink>
                        </StyledMenuGroup>
                        <StyledMenuGroup>
                            <StyledMenuLink>
                                <StyledMenuButton onClick={() => setModal({ ...modal, showRegisterModal: true })}>REGISTER</StyledMenuButton>
                            </StyledMenuLink>
                            <StyledMenuLink>
                                <StyledMenuButton onClick={() => setModal({ ...modal, showLoginModal: true })}>LOGIN</StyledMenuButton>
                            </StyledMenuLink>
                        </StyledMenuGroup>
                    </StyledMenu>
                    {modal.showRegisterModal && <RegisterModal modal={modal} setModal={setModal} />}
                    {modal.showLoginModal && <LoginModal modal={modal} setModal={setModal} />}
                </StyledHomeWrapper>
            </StyledHomePage>
        </Layout>
    );
}

export default Home;