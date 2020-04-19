import React, { useState } from 'react'
import styled from 'styled-components'
import RegisterModal from '../RegisterModal'
import LoginModal from '../LoginModal'
import navBg from '../../images/navBg.png'

const StyledMenu = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-image: url(${navBg});
    background-size: contain;
    padding: 10px 0;
    font-size: 1.3em;
`;

const StyledMenuGroup = styled.ul`
    list-style: none;
    display: flex;
`;

const StyledMenuLink = styled.li`
    display: flex;
    align-items: center;
    padding: 5px 20px 5px 20px;
    color: white;
    @media ${({ theme }) => theme.device.tablet} {
        padding: 0px;
    }
`;

const StyledMenuHref = styled.a`
    padding: 5px 20px 5px 20px;
    color: white;
    @media ${({ theme }) => theme.device.tablet} {
        padding: 5px;
    }
`;

const StyledMenuButton = styled.button`
    border: none;
    border-radius: 4px;
    padding: 5px 20px 5px 20px;
    background: none;
    margin-left: 20px;
    color: white;
`;



const Home = ({ logged }) => {

    const [modal, setModal] = useState({ showRegisterModal: false, showLoginModal: false })

    const logOut = () => {
        localStorage.removeItem('token');
        window.location.replace("/");
    }

    return (
        <>
            {!logged &&
                <StyledMenu>
                    <StyledMenuGroup>
                        <StyledMenuLink>
                            <StyledMenuHref>GRA JARKA I MARCINA</StyledMenuHref>
                        </StyledMenuLink>
                    </StyledMenuGroup>
                    <StyledMenuGroup>
                        {logged ?
                            <StyledMenuLink>
                                <StyledMenuButton onClick={() => logOut()}>LOGOUT</StyledMenuButton>
                            </StyledMenuLink> :
                            <>
                                <StyledMenuLink>
                                    <StyledMenuButton onClick={() => setModal({ ...modal, showRegisterModal: true })}>REGISTER</StyledMenuButton>
                                </StyledMenuLink>
                                <StyledMenuLink>
                                    <StyledMenuButton onClick={() => setModal({ ...modal, showLoginModal: true })}>LOGIN</StyledMenuButton>
                                </StyledMenuLink>
                            </>
                        }
                    </StyledMenuGroup>
                </StyledMenu>
            }

            {modal.showRegisterModal && <RegisterModal modal={modal} setModal={setModal} />}
            {modal.showLoginModal && <LoginModal modal={modal} setModal={setModal} />}
        </>
    );
}

export default Home;