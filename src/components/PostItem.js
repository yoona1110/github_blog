import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import calender from '../assets/ic_calender.png';

const PostItem = () => {
    const location = useLocation();
    const { state } = location;

    if (!state) {
        return <Container> 해당 게시글을 찾을 수 없습니다. </Container>
    }
    const { id, title, content, date, cate } = state;

    return (
        <Container>
            <TitleContainer>
                <Title> {title} </Title>
                <DateContainer>
                    <CalenderImg src={calender}/>
                    <SubContent> {date} </SubContent>
                </DateContainer>
            </TitleContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: -15px;
    margin-bottom: -10px;
    padding: 0 13px;
`;
const DateContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const CategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 4px;
`;
const Title = styled.p`
    color: #4B4B4B;
    font-size: 19px;
    font-weight: 700;
`;
const CalenderImg = styled.img`
    width: 16px;
    height: 17px;
`;
const SubContent = styled.p`
    margin-left: 9px;
    color: #4B4B4B;
    font-size: 16px;
    font-weight: 400; 
`;
export default PostItem;