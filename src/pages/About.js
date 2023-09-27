import styled from "styled-components";

const About = () => {
    return (
        <Container>
            <Title> About </Title>
            <Line/>
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
    line-height: normal;
    margin: 0 0 5px 10px;
`;

const Line = styled.hr`
    width: 852px;
    border: 0.5px dotted #9190B4;
    margin-bottom: 19px;
`;

export default About;