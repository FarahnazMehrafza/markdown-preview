/*MarkdownOutput Component:
A OutputContainer styled-component is defined for the
 container that will display the converted Markdown.
The MarkdownOutput component accepts a single prop, markdown, d
efined by the MarkdownOutputProps interface. This prop is the Markdown text to be converted. 
The react-markdown library uses this text as its children to convert it into HTML. */

import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const OutputContainer = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 20px; /* Adjust margin as needed */
`;

// Define MarkdownOutputProps interface
interface MarkdownOutputProps {
  markdown: string;
}

// Define MarkdownOutput component
const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;
