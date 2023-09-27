import styled from "styled-components";

import habitationImg from '../assets/habitationMark.svg';
import emailImg from '../assets/emailMark.svg';
import gitHubImg from '../assets/githubMark.svg';

import ProfilePhote from '../assets/ProfileImg.jpeg';

const Profile = () => {
    const url = 'https://github.com/yoona1110';
    const email = 'mailto:gjdbsdk18@icloud.com';

    return (
        <Container>
            <ProfileInfo>
                <ProfileImg src={ProfilePhote}/>
                <ProfileName> 아굥 </ProfileName>
                <ProfileSubName> 개발 블로그 </ProfileSubName>
                <ProfileDetailInfo>
                    <img 
                        style={{ width: '22px', height: '21px' }} 
                        src={habitationImg}
                    />
                    <ProfileDetailTitle> ChunCheon </ProfileDetailTitle>
                </ProfileDetailInfo>
                <ProfileDetailInfo onClick={() => window.open(email)}> 
                    <img 
                        style={{ width: '22px', height: '15px' }} 
                        src={emailImg}
                    />
                    <ProfileDetailTitle> Email </ProfileDetailTitle>
                </ProfileDetailInfo>
                <ProfileDetailInfo onClick={() => window.open(url)}>
                    <img 
                        style={{ width: '22px', height: '20px' }} 
                        src={gitHubImg}
                    />
                    <ProfileDetailTitle> GitHub </ProfileDetailTitle>
                </ProfileDetailInfo>
            </ProfileInfo>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 93px 0 31px;
`;

const ProfileInfo = styled.div`
    flex-direction: column;
    flex: 1;
`;
const ProfileImg = styled.img`
    width: 201px;
    height: 201px;
    flex-shrink: 0;
    border-radius: 20px;
    background-color: #F3F3F3;
`;
const ProfileName = styled.p`
    margin: 11px 0 2px 0;
    color: #4B4B4B;
    font-size: 22px;
    font-weight: 700;
    line-height: normal;
`;
const ProfileSubName = styled.p`
    margin: 0 auto;
    margin-bottom: 30px;
    color: #4B4B4B;
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
`;

const ProfileDetailInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: -25px;

    cursor: pointer;
`;
const ProfileDetailTitle = styled.p`
    margin-left: 8px;
    color: #4B4B4B;
    font-size: 17px;
    font-weight: 400;
    line-height: normal;
`;
export default Profile;