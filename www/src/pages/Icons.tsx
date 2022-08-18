import { useParams } from 'react-router-dom';
import MarkdownPreview from '@uiw/react-markdown-preview';
import styled from 'styled-components';
import { STITypescript } from '@icongo/sti/lib/STITypescript';
import { STIGithub } from '@icongo/sti/lib/STIGithub';
import { SINpm } from '@icongo/si/lib/SINpm';
import { info } from '../data';
import { IconsList } from '../components/IconsList';

export const WarpperIcons = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-columns: max-content;
  grid-template-columns: repeat(auto-fill,minmax(90px, 1fr));
  gap: 15px;
`;

export const Panel = styled.div`
  background-color: var(--color-neutral-muted);
  padding: 10px 20px 20px 20px;
  margin-bottom: 20px;
  color: var(--color-fg-default);
  a {
    text-decoration: none;
    svg {
      display: block;
    }
  }
  > h1 {
    margin: 0;
    font-size: 26px;
  }
  > h2 {
    margin: 0;
    font-size: 18px;
  }
  .wmde-markdown {
    background-color: transparent;
  }
`;

const Badges = styled.p`
  margin-top: 0;
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const IconsPage = () => {
  const params = useParams<{ name: string; }>();
  const baseData = info[params.name?.toLocaleLowerCase()!];

  return (
    <div>
      {baseData && (
        <Panel>
          <h1>{baseData.title}</h1>
          <Badges>
            <STITypescript />
            {baseData.npm && (
              <a href={`https://www.npmjs.com/package/${baseData.npm}`} target="__blank">
                <SINpm style={{ fill: '#cb0200' }} />
              </a>
            )}
            {baseData.gh && (
              <a href={baseData.gh} target="__blank">
                <STIGithub />
              </a>
            )}
            {baseData.license}  {baseData.gh && <a href={baseData.gh} target="__blank">{baseData.gh}</a>}
          </Badges>
          <MarkdownPreview source={`\`\`\`js\nimport { IconName } from '${baseData.npm}';\n\`\`\``} />
        </Panel>
      )}
      <IconsList />
    </div>
  );
}