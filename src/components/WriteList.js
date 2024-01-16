import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import matter from "gray-matter";

import WriteItem from "./WriteItem";

async function getAllPosts() { 
    const postContext = require.context('../_posts', false, /\.md$/);
    const posts = [];
    for (const key of postContext.keys()) {
        const post = key.slice(2);
        console.log(postContext);
        const content = await import(`../_posts/${post}`);
        const meta = matter(content.default);
        posts.push({
            slug: post.replace('.md', ''),
            title: meta.data.title,
            content: content.default,
            date: meta.data.date,
            cate: meta.data.cate,
        });
    }
    return posts;
}

const WriteList = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const posts = await getAllPosts();
            setData(posts);
        }
        fetchData();
    }, []);

    console.log(data);
    return (
        <Container>
            {data.map((post, idx) => (
                <WriteItem 
                    key={idx}
                    id={idx}
                    title={post.title}
                    content={post.content}
                    date={post.date}
                    cate={post.tags}
                    onClick={() => navigate(`/Post/${idx}`, { state: {...post, cate: post.tags.join(',')}})}
                />
            ))}
        </Container>
    )
}

const Container = styled.div`
`;

export default WriteList;