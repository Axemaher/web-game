import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Frame from '../../components/Frame'
import Input from '../../components/Input'
import Button from '../../components/Button'
import H1 from '../../components/H1'
import x from '../../images/x.png'
import LoadingSpinner from '../../components/LoadingSpinner'
import { endpoitUrls } from '../../utils/api'

const StyledModalWrapper = styled.div`
    padding-top: 20px;
    display: flex;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100vw;
    min-height: 100vh;
    justify-content: center;
    overflow: auto; 
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4); 
      @media screen and (max-width: 1200px) {
          width: 100%;
      }
`;

const StyledForm = styled.form`
    box-sizing: border-box;
    padding: 20px;
    display: grid;
    width: 100%;
    @media ${({ theme }) => theme.device.mobileL} {
        padding: 0px;
    }
`;

const StyledLabel = styled.label`
    margin-left: 6px;
    font-size: 12px;
`;

const StyledButton = styled.button`
    position: absolute;
    background: transparent;
    border: none;
    top: -1px;
    right: 0px;
    cursor: pointer;
`;

const StyledXIcon = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    background-image: url(${x});
    background-size: contain;
`;

const StyledInputWrapper = styled.div`
    width: 100%;
    position: relative;
`;

const StyledError = styled.span`
    color: red;
    position: absolute;
    right: 6px;
    bottom: 0;
    text-align: right;
    font-size: 10px;
`;

const ModalWrapper = ({ modal, setModal }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({
        wrongUsername: false,
        wrongPassword: false,
        emptyUsername: false,
        emptyPassword: false,
    })
    const [loading, setLoading] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true)
        setErrors(errors => (Object.keys(errors).reduce((acc, key) => { acc[key] = false; return acc; }, {})))

        if (username.length > 0 && password.length > 0) {

            axios.post(endpoitUrls.loginUrl,
                { username, password },
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'access-control-allow-credentials': "true",
                        'access-control-allow-origin': '*',
                        'crossdomain': 'true'
                    }
                }
            ).then(resp => {
                setLoading(false)
                localStorage.setItem('token', resp.headers.authorization);
                if (resp) {
                    setModal({ ...modal, showLoginModal: false })
                }
                window.location.reload()
            }).catch(err => {
                setLoading(false)
                console.log(err.response)
                setErrors(errors => ({ ...errors, wrongUsername: true }))
                setErrors(errors => ({ ...errors, wrongPassword: true }))
            });
        } else {
            setLoading(false)
            !username && setErrors(errors => ({ ...errors, emptyUsername: true }))
            !password && setErrors(errors => ({ ...errors, emptyPassword: true }))
        }
    }
    return (
        <StyledModalWrapper>
            <Frame>
                <H1>Login</H1>
                <StyledForm onSubmit={e => handleSubmit(e)}>
                    <StyledInputWrapper>
                        <StyledLabel htmlFor="username">username</StyledLabel>
                        <Input
                            onChange={e => setUsername(e.target.value)}
                            id="username"
                            name="username"
                            placeholder="username"
                            type="text"
                            value={username}
                        />
                        {errors.wrongUsername && <StyledError>please check your username</StyledError>}
                        {errors.emptyUsername && <StyledError>write your username</StyledError>}
                    </StyledInputWrapper>

                    <StyledInputWrapper>
                        <StyledLabel htmlFor="password">password</StyledLabel>
                        <Input
                            password
                            onChange={e => setPassword(e.target.value)}
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                            value={password}
                        />
                        {errors.wrongPassword && <StyledError>please check your password</StyledError>}
                        {errors.emptyPassword && <StyledError>write your password</StyledError>}
                    </StyledInputWrapper>
                    <Button type="submit">LOGIN</Button>
                </StyledForm>
                <StyledButton onClick={() => setModal({ ...modal, showLoginModal: false })}><StyledXIcon></StyledXIcon></StyledButton>
                {loading && <LoadingSpinner />}
            </Frame>
        </StyledModalWrapper >
    );
}


export default ModalWrapper;