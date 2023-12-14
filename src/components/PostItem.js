import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import calenderImg from '../assets/ic_calender.png';
import tagImg from '../assets/ic_tag.png';
import categoryImg from '../assets/ic_category.png';

const PostItem = () => {
    const location = useLocation();
    const { state } = location;

    if (!state) {
        return <Container> 해당 게시글을 찾을 수 없습니다. </Container>
    }

    const { id, title, content, date, cate } = state;

    const categoriesArray = cate.split(',');

    return (
        <Container>
            <TitleContainer>
                <Title> {title} </Title>
                <DateContainer>
                    <CalenderImg src={calenderImg}/>
                    <SubContent> {date} </SubContent>
                </DateContainer>
            </TitleContainer>
            <Line/>
            <CTContainer>
                <CateIcon src={categoryImg}/>
                <CategoryTitle> 카테고리 : </CategoryTitle>
                {categoriesArray.map(item => (
                    <CategoryItem> {item} </CategoryItem>
                ))}
            </CTContainer>
            <CTContainer>
                <CateIcon src={tagImg}/>
                <CategoryTitle> 태그 : </CategoryTitle>
                {categoriesArray.map(item => (
                    <CategoryItem> {item} </CategoryItem>
                ))}
            </CTContainer>
            <ContentContainer>
                {content}
            </ContentContainer>
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
    padding: 0 10px;
`;
const DateContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Title = styled.p`
    color: #4B4B4B;
    font-size: 20px;
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
const Line = styled.hr`
    width: 852px;
    border: 0.5px dotted #9190B4;
    margin: 0 auto;
    margin-top: 3px;
    margin-bottom: 19px;
`;
const CTContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: -15px;
    padding: 0 10px;
`;
const CateIcon = styled.img`
    width: 19px;
    height: 16px;
    margin-right: 10px;
`;
const CategoryTitle = styled.p`
    color: #4B4B4B;
    font-size: 17px;
    font-weight: 400;
`;
const CategoryItem = styled.div`
    color: #070582;
    font-size: 15px;
    font-weight: 400;
    margin-left: 8px;
    padding: 6px 10px;
    border: 1px #070582 solid;
    border-radius: 10px;
`;
const ContentContainer = styled.div`
    padding: 0 10px;
    margin-top: 85px;
`;
export default PostItem;