import  { useState } from 'react';
import Header from './src/components/Header';
import MarkdownGuide from './src/components/MarkdownGuide';
import MarkdownInput from './src/components/MarkdownInput';
import MarkdownOutput from './src/components/MarkdownOutput';


const App = () => {
  const [markdown, setMarkdown] = useState<string>('# Hello World');
  const [showGuide, setShowGuide] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>  {
    setMarkdown(event.target.value);
  };

  const onToggleGuide = () => {
    setShowGuide(!showGuide);
  };

  return (
    <div>
      <Header onToggleGuide={onToggleGuide} />
      {showGuide && <MarkdownGuide />}
     
      <MarkdownInput value={markdown}  onChange={handleChange}   />
        <MarkdownOutput markdown={markdown} />
     
    </div>
  );
};

export default App;
