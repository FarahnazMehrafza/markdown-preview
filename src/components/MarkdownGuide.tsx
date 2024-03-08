import styled from 'styled-components' ;

const GuideContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    /* top right bottom left */
    padding: 10px 20px;
    background-color: #282c34;
    color: white;
`;


const MarkdownGuide : React.FC = () => {
return (
 <GuideContainer>
    <h1> MarkdownGuidefara </h1>
      <ul>
        <li>
          <strong>Heading </strong>
        </li>
        <li>
          <strong>Emphasis</strong>
        </li>
        <li>
          <strong>Strong Emphasis</strong>
        </li>
    </ul>
    </GuideContainer> 
 )
};


  export default MarkdownGuide;
