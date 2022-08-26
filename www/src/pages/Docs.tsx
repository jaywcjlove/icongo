import MarkdownPreview from '@uiw/react-markdown-preview';
import mdStr from '../../../core/README.md';

export const DocsPage = () => {
  return (
    <MarkdownPreview source={mdStr.source} />
  );
}