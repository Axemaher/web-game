import React, { useState } from 'react'
import styled from 'styled-components'
import FrameHeavy from '../../components/Frames/FrameHeavy'
import FrameLight from '../../components/Frames/FrameLight'
import ButtonLight from '../../components/Buttons/ButtonLight'
import ButtonIco from '../../components/Buttons/ButtonIco'
import Input from '../../components/Input'

const StyledWrapper = styled.div`
    color: white;
    font-size: 1rem;
    display: flex;
    justify-content: center;
`;

const StyledContainer = styled.div`
    width: 300px;
    position: relative;
    margin-bottom: 30px;
    padding: 5px;
`;

const StyledContainerName = styled.p`
    font-size: 18px;
    margin-bottom: 10px;
`;

const StyledError = styled.p`
    color: red;
    position: absolute;
    right: 6px;
    bottom: -8px;
    text-align: right;
    font-size: 10px;
`;

const StyledRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`;

const StyledContainerAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledAvatarImage = styled.img`
    width: 200px;
    height: 200px;
`;

const StyledButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const heroGenders = [
    {
        id: 1,
        name: 'men',

    },
    {
        id: 2,
        name: 'women',

    }
];

const heroClasses = [
    {
        id: 1,
        name: "Knight",
        description: "dsgffghdghf  ghfhdgf",
        stats: {
            str: 10,
            dex: 5,
            int: 4,
            wis: 2,
            ten: 7,
            luc: 4
        }
    },
    {
        id: 2,
        name: "Mage",
        description: "dsgffghdghf  dsfsdfds ghfhdgf",
        stats: {
            str: 2,
            dex: 5,
            int: 8,
            wis: 7,
            ten: 7,
            luc: 4
        }
    },
    {
        id: 3,
        name: "Thief",
        description: "are usually nimble melee or ranged combatants, and tend to be focused on dodging attacks rather than withstanding damage. They often attack by dual-wielding daggers or with other small one-handed and/or concealable weapons, relying on speed and rapid strikes rather than sheer damage output.",
        stats: {
            str: 4,
            dex: 10,
            int: 5,
            wis: 4,
            ten: 4,
            luc: 7
        }
    }
];

const womenAvatars = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4-swreD3sn2Hfy_Vnn2WYjelvyiWRe-jnfQMNcvFe7cw6pmNY&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEAxub7ZqxolaFKvCdaLrSIguy91Zd184ifv6pXxkC-9sJCt6u&usqp=CAU"];
const menAvatars = [
    "https://avatarfiles.alphacoders.com/153/153179.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdY1iRTESMT56dE8WQ07HzrDXQKzl8bFXxbom9qGbsUs4mpJWj&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZts44cgZ4xcE9tKair7YefTBV-baALBMTTCCwVw-HahPtN5gr&s"
];


const AddHero = () => {
    const [name, setName] = useState("");
    const [genderInfo, setGenderInfo] = useState(heroGenders[0]);
    const [classInfo, setClassInfo] = useState(heroClasses[0]);
    const [avatarIndex, setAvatarIndex] = useState(0);

    const [errors, setErrors] = useState({
        emptyName: false,
    })

    const handleGenderChange = id => {
        setGenderInfo(heroGenders.filter(el => el.id === id)[0]);
        setAvatarIndex(0);
    };

    const handleAvatarUrl = action => {
        let i = avatarIndex;
        switch (action) {
            case "next":
                if (genderInfo.name === 'men') {
                    i === menAvatars.length - 1 ? i = 0 : i = i + 1;
                } else if (genderInfo.name === 'women') {
                    i === womenAvatars.length - 1 ? i = 0 : i = i + 1;
                }
                break;
            case "prev":
                if (genderInfo.name === 'men') {
                    i === 0 ? i = menAvatars.length - 1 : i = i - 1;
                } else if (genderInfo.name === 'women') {
                    i === 0 ? i = womenAvatars.length - 1 : i = i - 1;
                }
                break;
            default:
                return;
        }
        setAvatarIndex(i);
    };

    const handleCreate = () => {

        setErrors(errors => (Object.keys(errors).reduce((acc, key) => { acc[key] = false; return acc; }, {})))

        if (name.length > 3) {
            // axios.post(endpoitUrls.createHeroUrl,
            //     { data: 'data' },
            //     {
            //         headers: {
            //             'Content-Type': 'application/json; charset=UTF-8'
            //         }
            //     }
            // ).then(resp => {
            //     if (resp) {
            //         setNotificationData({
            //             visible: true,
            //             text: 'Hero created correctly, you can see him i barracks now'
            //         })
            //     }
            // }).catch(err => console.log(err));
        } else {
            name.length < 3 && setErrors(errors => ({ ...errors, emptyName: true }))
        }
    }

    return (
        <StyledWrapper>
            <FrameHeavy>
                <StyledContainer>
                    <StyledContainerName>Name</StyledContainerName>
                    <Input value={name} onChange={e => setName(e.target.value)} />
                    {errors.emptyName && <StyledError>hero name must be at least 3 characters</StyledError>}
                </StyledContainer>
                <StyledContainer>
                    <StyledContainerName>Gender</StyledContainerName>
                    <StyledRow>
                        {heroGenders.map(e => (
                            <ButtonLight
                                key={e.id}
                                onClick={() => handleGenderChange(e.id)}
                                active={e.id === genderInfo.id}
                            >
                                {e.name}
                            </ButtonLight>
                        ))}
                    </StyledRow>
                </StyledContainer>
                <StyledContainer>
                    <StyledContainerName>Class</StyledContainerName>
                    <StyledRow>
                        {heroClasses.map(e => (
                            <ButtonLight
                                key={e.id}
                                onClick={() =>
                                    setClassInfo(heroClasses.filter(el => el.id === e.id)[0])
                                }
                                active={e.id === classInfo.id}
                            >
                                {e.name}
                            </ButtonLight>
                        ))}
                    </StyledRow>
                </StyledContainer>
                <StyledContainer>
                    <StyledContainerName>Avatar</StyledContainerName>
                    <StyledContainerAvatar>
                        <ButtonIco onClick={() => handleAvatarUrl("prev")}>{"<"}</ButtonIco>
                        <FrameLight>
                            <StyledAvatarImage
                                alt={`${genderInfo.name} - ${avatarIndex}`}
                                src={genderInfo.name === 'men' ? menAvatars[avatarIndex] : womenAvatars[avatarIndex]} />
                        </FrameLight>
                        <ButtonIco onClick={() => handleAvatarUrl("next")}>{">"}</ButtonIco>
                    </StyledContainerAvatar>
                </StyledContainer>
            </FrameHeavy>
            <FrameHeavy>
                <StyledContainer>
                    <StyledContainerName>{classInfo.name}</StyledContainerName>
                    <StyledRow>
                        <span>Strength</span>
                        <span>{classInfo.stats.str}</span>
                    </StyledRow>
                    <StyledRow>
                        <span>Dexterity</span>
                        <span>{classInfo.stats.dex}</span>
                    </StyledRow>
                    <StyledRow>
                        <span>Intelligence</span>
                        <span>{classInfo.stats.int}</span>
                    </StyledRow>
                    <StyledRow>
                        <span>Wisdom</span>
                        <span>{classInfo.stats.wis}</span>
                    </StyledRow>
                    <StyledRow>
                        <span>Tenacity</span>
                        <span>{classInfo.stats.ten}</span>
                    </StyledRow>
                    <StyledRow>
                        <span>Luck</span>
                        <span>{classInfo.stats.luc}</span>
                    </StyledRow>
                </StyledContainer>
                <StyledContainer>
                    <span>{classInfo.description}</span>
                </StyledContainer>
                <StyledContainer>
                    <StyledButtonGroup>
                        <ButtonLight onClick={() => handleCreate()}>create</ButtonLight>
                    </StyledButtonGroup>
                </StyledContainer>
            </FrameHeavy>
        </StyledWrapper>
    );
}

export default AddHero;