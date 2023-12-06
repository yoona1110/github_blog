import styled from "styled-components";

const About = () => {
    return (
        <Container>
            <Title> About </Title>
            <Line/>
            <Introduce> 하루하루 성장하는 개발자, 허윤아입니다. </Introduce>
            <SubContainer>
                <SubTitle> 👩‍💻 About Me </SubTitle>
                <Line/>
                <List>
                    <Contents> 어떤 경험에서든 배움을 얻고 실천하려 노력합니다. </Contents>
                    <Contents> 사회의 핵심 인재, 공헌할 수 있는 사람이 되고 싶습니다. </Contents>
                    <Contents> 기록과 공유의 가치를 알기에 학습한 것들을 Github에 남기고, 블로그를 운영하며 소통하고 있습니다. </Contents>
                </List>
            </SubContainer>
            <SubContainer>
                <SubTitle> 🔩 Tech Stack </SubTitle>
                <Line/>
                <List>
                    <Contents> JavaScript </Contents>
                    <Contents> React </Contents>
                    <Contents> React Native </Contents>
                    <Contents> Java </Contents>
                    <Contents> Kotlin </Contents>
                    <Contents> MySQL </Contents>
                </List>
            </SubContainer>
            <SubContainer>
                <SubTitle> 🧩 Experience & Projects </SubTitle>
                <Line/>
                <List>
                    <ListTitle> 🎲 Experience </ListTitle>
                    <Contents> 2021.03 ~ 2021.06 - 교내 학술 동아리 NoName 활동 </Contents>
                    <Contents> 2023.03 ~ 2023.12 - 멋쟁이사자처럼 11기 운영 </Contents>
                </List>
                <List>
                    <ListTitle style={{ marginTop: '40px' }}> 💻 Projects </ListTitle>
                    <Contents> 2023.01 ~ 2023.02 - Call me by your text: 사람들에게 ‘나’에 대해 질문하는 서비스 </Contents>
                    <Contents> 2023.07 ~ 2023.08 - 손안전: 전기세 민영화의 혼란을 최소화 해줄 수 있는 웹 서비스 </Contents>
                    <Contents> 2023.07 ~ 2023.08 - Amica: 반려인 대상 이커머스 웹앱 서비스 </Contents>
                    <Contents> 2023.08 ~ 2023.10 - 모우미: 발달 장애인을 위한 쉬운 언어 번역 중계 서비스 </Contents>
                    <Contents> 2023.09 ~ 2023.11 - 한림대x강원대 멋쟁이사자처럼 연합 해커톤 감자톤 투자 게임 개발 </Contents>
                </List>
            </SubContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
const Title = styled.p`
    color: #9190B4;
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 5px 10px;
`;
const Line = styled.hr`
    width: 852px;
    border: 0.5px dotted #9190B4;
    margin-bottom: 19px;
`;
const Introduce = styled.p`
    color: #4B4B4B;
    font-size: 20px;
    font-weight: 700;
    margin: 0 auto;
    margin-left: 25px;
    margin-top: 5px;
    margin-bottom: 40px;
`;
const SubContainer = styled.div`
    margin-left: 25px;
    /* margin-top: 40px; */
    padding-bottom: 40px;
`;
const SubTitle = styled.p`
    color: #4B4B4B;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
`;
const List = styled.ul`
    margin-left: -14px;
`;
const Contents = styled.li`
    color: #4B4B4B;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
`;
const ListTitle = styled.p`
    color: #4B4B4B;
    font-size: 18px;
    font-weight: 700;
    margin-left: -20px;
`;
export default About;