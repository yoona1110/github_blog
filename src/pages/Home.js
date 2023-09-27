import styled from "styled-components";

const Home = () => {
    return (
        <Container>
            <Title> 최근 포스트 </Title>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
`;
const Title = styled.p`
    color: #9190B4;
    font-size: 22px;
    font-weight: 700;
    line-height: normal;
`;
export default Home;