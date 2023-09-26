import styled from "styled-components";

import habitationImg from '../assets/habitationMark.svg';
import emailImg from '../assets/emailMark.svg';
import gitHubImg from '../assets/githubMark.svg';

const Home = () => {
    const url = 'https://github.com/yoona1110';

    return (
        <Container>
            <ProfileInfo>
                <ProfileImg />
                <ProfileName> 아굥 </ProfileName>
                <ProfileSubName> 개발 블로그 </ProfileSubName>
                <ProfileDetailInfo>
                    <img 
                        style={{ width: '19px', height: '23px' }} 
                        src={habitationImg}
                    />
                    <ProfileDetailTitle> ChunCheon </ProfileDetailTitle>
                </ProfileDetailInfo>
                <ProfileDetailInfo> 
                    <img 
                        style={{ width: '22px', height: '16px' }} 
                        src={emailImg}
                    />
                    <ProfileDetailTitle> Email </ProfileDetailTitle>
                </ProfileDetailInfo>
                <ProfileDetailInfo onClick={() => window.open(url)}>
                    <img 
                        style={{ width: '22px', height: '21px' }} 
                        src={gitHubImg}
                    />
                    <ProfileDetailTitle> GitHub </ProfileDetailTitle>
                </ProfileDetailInfo>
            </ProfileInfo>
            <MainContent>
                <div> 가운데 </div>
            </MainContent>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 26px 0 0 26px;
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
    margin: 11px 0 4px 0;
    color: #4B4B4B;
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
`;
const ProfileSubName = styled.p`
    margin: 0 auto;
    margin-bottom: 50px;
    color: #4B4B4B;
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
`;

const ProfileDetailInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: -15px;

    cursor: pointer;
`;
const ProfileDetailTitle = styled.p`
    margin-left: 9px;
    color: #4B4B4B;
    font-size: 19px;
    font-weight: 400;
    line-height: normal;
`;

const MainContent = styled.div`
    flex: 3;
`;
export default Home;