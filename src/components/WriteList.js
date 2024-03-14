import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import matter from "gray-matter";

import WriteItem from "./WriteItem";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// async function getAllPosts() { 
//     const postContext = require.context('../_posts', false, /\.md$/);
//     const posts = [];
//     for (const key of postContext.keys()) {
//         const post = key.slice(2);
//         const content = await import(`../_posts/${post}`);
//         const meta = matter(content.default);
//         posts.push({
//             slug: post.replace('.md', ''),
//             title: meta.data.title,
//             content: content.default,
//             date: meta.data.date,
//             cate: meta.data.cate,
//         });
//     }
//     return posts;
// }

const WriteList = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const postPath = require(`../_posts/2023-09-30-first-post.md`);
            
            fetch(postPath.default)
                .then(r => r.text())
                .then(text => {
                    setData(text);
                });
        };

        fetchData();
    }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const posts = await getAllPosts();
    //         setData(posts);
    //     }
    //     fetchData();
    // }, []);

    console.log(data);
    return (
        // <Container>
        //     {data.map((post, idx) => (
        //         <WriteItem/>
        //     ))}
        // </Container>
        <Markdown remarkPlugins={[remarkGfm]} source={data.split('\n').map(line => `${line}\n`).join('')}/>
    )
}

const Container = styled.div`
`;

export default WriteList;