import styled from "styled-components";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import calender from '../assets/ic_calender.png';

const WriteItem = ({ title, content, date, cate, tags, onClick }) => {
    return (
        <Container onClick={onClick}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {`# ${title}\n${content}`}
      	    </ReactMarkdown>
              <TitleContainer>
                 <Title> {title} </Title>
                 <DateContainer>
                     <CalenderImg src={calender}/>
                     <SubContent> {date} </SubContent>
                 </DateContainer>
             </TitleContainer>
             <SubContent style={{ margin: '0 0 0 13px' }}> {content} </SubContent>
             <CategoryContainer>
                 {/* {cate.map(item => ( */}
                     <CateItem> {cate} </CateItem>
                 {/* ))} */}
             </CategoryContainer>
        </Container>
        // <Container onClick={onClick}>
        //     <TitleContainer>
        //         <Title> {title} </Title>
        //         <DateContainer>
        //             <CalenderImg src={calender}/>
        //             <SubContent> {date} </SubContent>
        //         </DateContainer>
        //     </TitleContainer>
        //     <SubContent style={{ margin: '0 0 0 13px' }}> {content} </SubContent>
        //     <CategoryContainer>
        //         {/* {cate.map(item => ( */}
        //             <CateItem> {cate} </CateItem>
        //         {/* ))} */}
        //     </CategoryContainer>
        // </Container>
    );
}

const Container = styled.div`
    margin-bottom: 30px;
    cursor: pointer;
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
const CateItem = styled.p`
    color: #070582;
    font-size: 15px;
    font-weight: 400;
    margin: 10px 0 0 8px;
    padding: 6px 11px;
    border: 1px #070582 solid;
    border-radius: 10px;
`;
export default WriteItem;