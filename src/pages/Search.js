import styled from "styled-components";
import { useState } from "react";
import SearchIcon from '../assets/searchMark.svg';

const Search = () => {
    const [msg, setMsg] = useState('검색어를 입력해주세요.');
    return (
        <Container>
            <Title> Search </Title>
            <Line/>
            <SearchContainer> 
                <SearchTab> {msg} </SearchTab>
                <Icon src={SearchIcon}/>
            </SearchContainer>
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

const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const SearchTab = styled.div`
    width: 500px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #070582;
    padding-left: 14px;
    padding-top: 9px;
    padding-bottom: 9px;
    background: #F6F6F6;

    color: #9190B4;
    font-size: 17px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1px;
`;

const Icon = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 13px;
    margin-top: 8px;
    cursor: pointer;
`;

export default Search;