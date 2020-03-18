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
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({
        wrongUsername: false,
        wrongPassword: false,
        wrongEmail: false,
        emptyUsername: false,
        emptyPassword: false,
        emptyEmail: false,
        usernameExist: false,
    })

    const [loading, setLoading] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(errors => ({ ...errors, wrongUsername: false }))
        setErrors(errors => ({ ...errors, wrongPassword: false }))
        setErrors(errors => ({ ...errors, wrongEmail: false }))
        setErrors(errors => ({ ...errors, emptyUsername: false }))
        setErrors(errors => ({ ...errors, emptyPassword: false }))
        setErrors(errors => ({ ...errors, emptyEmail: false }))
        setErrors(errors => ({ ...errors, usernameExist: false }))



        if (username.length > 0 && email.length > 0 && password.length > 0) {
            setLoading(true)
            axios.post(endpoitUrls.registerUrl,
                { username, password, email },
                {
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    }
                }
            ).then(resp => {
                setLoading(false)
                if (resp) {
                    setModal({ ...modal, showRegisterModal: false })
                }
            }).catch(err => {
                setLoading(false)
                console.log(err.response)
                if (err.response.status === 409) {
                    setErrors(errors => ({ ...errors, usernameExist: true }))
                }
                for (var o in err.response.data) {
                    if (err.response.data[o].type === 'Email.user.email') {
                        setErrors(errors => ({ ...errors, wrongEmail: true }))
                    }
                    if (err.response.data[o].type === 'Size.user.password') {
                        setErrors(errors => ({ ...errors, wrongPassword: true }))
                    }
                    if (err.response.data[o].type === 'Size.user.username') {
                        setErrors(errors => ({ ...errors, wrongUsername: true }))
                    }
                }
                return true;
            });
        } else {
            setLoading(false)
            !username && setErrors(errors => ({ ...errors, emptyUsername: true }))
            !password && setErrors(errors => ({ ...errors, emptyPassword: true }))
            !email && setErrors(errors => ({ ...errors, emptyEmail: true }))
        }
    }
    return (
        <StyledModalWrapper>
            <Frame>
                <H1>Register</H1>
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
                        {errors.wrongUsername && <StyledError>please check your username </StyledError>}
                        {errors.emptyUsername && <StyledError>write your username</StyledError>}
                        {errors.usernameExist && <StyledError>username exist</StyledError>}

                    </StyledInputWrapper>

                    <StyledInputWrapper>
                        <StyledLabel htmlFor="email">email</StyledLabel>
                        <Input
                            onChange={e => setEmail(e.target.value)}
                            id="email"
                            name="email"
                            placeholder="email"
                            type="email"
                            value={email}
                        />
                        {errors.wrongEmail && <StyledError>please enter a valid email address</StyledError>}
                        {errors.emptyEmail && <StyledError>write your email</StyledError>}
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

                    <Button type="submit">REGISTER</Button>

                </StyledForm>
                <StyledButton onClick={() => setModal({ ...modal, showRegisterModal: false })}><StyledXIcon></StyledXIcon></StyledButton>
                {loading && <LoadingSpinner />}
            </Frame>
        </StyledModalWrapper>
    );
}


export default ModalWrapper;