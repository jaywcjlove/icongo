import MarkdownPreview from '@uiw/react-markdown-preview';
import styled from 'styled-components';
import mdStr from '../../../core/README.md';

const Warpper = styled.div`
`

export const HomePage = () => {
  return (
    <Warpper>
      <MarkdownPreview source={mdStr.source} />
    </Warpper>
  );
}