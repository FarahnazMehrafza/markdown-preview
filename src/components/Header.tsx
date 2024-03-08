//Define a styled container named using the styled-components library. 
//This container will be used to hold the title and button within the header.

import styled from "styled-components";

const HeaderContainer = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #282c34;
    color: white;
`;
//Next, create two additional styled-components, Title and Button.
// Each of these components is assigned specific CSS properties. 
//For instance, the Button component includes a &:hover CSS rule that
// changes the background color of the button when it's hovered over.

const Button = styled.button`
  background-color: #61dafb;
  padding: 10px;
  color: #9bcdff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  /* pseudo class */
  &:hover {
    background-color:	#ccf5f5;
  }
`;

const Title = styled.h1`
  background-color: #f6cacb;
  padding: 10px;
  color: #fee9be;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;


//Define the Header functional component.
// This component accepts a single prop, onToggleGuide.
// The onToggleGuide is described using an interface HeaderProps as 
//a function that doesn't take any argument and doesn't return anything. 
//It is utilized as the onClick handler for the Button, which means this 
//function will be executed when the Button is clicked.

interface HeaderProps {
    onToggleGuide: () => void ;
}

const Header = ({ onToggleGuide }: HeaderProps) => {
    return(
        <HeaderContainer>
          <Title> Markdown Previewer by Farahnaz</Title>
          <Button onClick={onToggleGuide}> Fara cheat sheet</Button>
        </HeaderContainer>  
    );
};
export default Header;


