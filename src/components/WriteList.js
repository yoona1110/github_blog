import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import matter from "gray-matter";

import WriteItem from "./WriteItem";

const postContext = require.context('../_posts', false, /\.md$/);
const posts = postContext.keys().map((key) => {
    const post = postContext(key);
    const { frontmatter, content } = matter(post);
    console.log('Post Data:', { frontmatter, content });
    return { ...frontmatter, content };
});

console.log("Posts:", posts);

const WriteList = () => {
    const navigate = useNavigate();

    return (
        <Container>
            {posts.map((post, idx) => (
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