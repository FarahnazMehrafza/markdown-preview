
/* MarkdownInput Component:
Define two styled-components:
InputContainer and StyledTextArea.
The InputContainer sets the dimensions for the textarea container,
while the StyledTextArea includes CSS for the textarea that users 
will type their Markdown into.
*/


/*Next, define the MarkdownInput component. 
MarkdownInput Component:
Define two styled-components: InputContainer and StyledTextArea. 
The InputContainer sets the dimensions for the textarea container,
 while the StyledTextArea includes CSS for the textarea that users will type their Markdown into.
import styled from "styled-components";
*/
import styled from "styled-components";

const InputContainer = styled.div`
    display:flex;
    align-items: left;
    padding: 10px 10px;
    background-color: #074a33;
    color: #6fcf71;
    width: 100%;
    height: 300%;
    border: 1px solid #ccc;
    box-sizing: border-box;
`;

const StyledTextArea = styled.textarea`
    display:flex;
    justify-content: space-between;
    align-items: left;
    padding: 10px 100px;
    background-color: #7a2035;
    color: white;
    border: none;
    outline: none;
    font-size: 16px;
    font-family: 'Arial', sans-serif;
    width: 100%;
    height: 100%;
    resize: none;
`;




interface MarkdownInputProps { 
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}



/*Next, define the MarkdownInput component. 
This component takes two props value and onChange,
 both of which are described using the MarkdownInputProps interface. 
The value prop is a string that corresponds to the current Markdown text.
The onChange prop is a function that handles changes to the textarea.
In the returned JSX, the StyledTextArea uses these two props. */


   const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
 
    return (
      <InputContainer>

        <StyledTextArea
          value={value}
          onChange={onChange}
          placeholder="Type your Markdown here..."
        />
      </InputContainer>
    );
  };
  
  export default MarkdownInput;
