import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import WriteItem from "./WriteItem";

const blogPostList = [
    {
        title: '[리액트 공부] 4. +- 버튼 만들기',
        content: '리액트 공부 네 번째 시간! +- 버튼을 눌렀을 때, 가운데 숫자 칸이 증가/감소 하도록 해보았는데 생각보다 어려웠다..',
        date: '2023.01.01',
        cate: ['React', 'Project'],
    },
    {
        title: '[리액트 공부] 3. 프로젝트 생성',
        content: '리액트 공부 세 번째 시간! 드디어 프로젝트를 생성했다.',
        date: '2023.01.01',
        cate: ['React', 'Project'],
    },
    {
        title: '[리액트 공부] 2. 개발환경 세팅(2)',
        content: '리액트 공부 두 번째 시간! 오늘까지만 개발환경 세팅하면 될 것 같다.',
        date: '2023.01.01',
        cate: ['React', 'Project'],
    }
]
const WriteList = () => {
    const navigate = useNavigate();

    return (
        <Container>
            {blogPostList.map((post, idx) => (
                <WriteItem 
                    key={idx}
                    id={idx}
                    title={post.title}
                    content={post.content}
                    date={post.date}
                    cate={post.cate}
                    onClick={() => navigate(`/Post/${idx}`, { state: post })}
                />
            ))}
        </Container>
    )
}

const Container = styled.div`
`;

export default WriteList;