import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { StyledFrameWrapper, StyledFrame } from '../Frame'
import { NotificationContext } from '../../utils/context';

const StyledContainer = styled.div`
    position: absolute;
    min-width: 200px;
    top: ${({ visible }) => visible ? 0 : '-100vh'};
    right: 0;
    display: flex;
    justify-content: flex-end;
    transition: all 1s;
    font-size: 1.3em;
`;

const StyledFrameNoPadding = styled(StyledFrame)`
    padding: 10px;
`;

const Notification = ({ children, visible }) => {

    const { notificationData, setNotificationData } = useContext(NotificationContext);

    useEffect(() => {
        if (visible) {
            setTimeout(() => {
                setNotificationData({
                    ...notificationData, visible: false
                })
            }, 6000);
        }
    }, [visible])

    return (
        <StyledContainer visible={visible}>
            <StyledFrameWrapper>
                <StyledFrameNoPadding>
                    {children}
                </StyledFrameNoPadding>
            </StyledFrameWrapper>
        </StyledContainer>
    );
}

export default Notification;