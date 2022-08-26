import { FunctionComponent, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import MarkdownPreview from '@uiw/react-markdown-preview';
import copyTextToClipboard from '@uiw/copy-to-clipboard'
import { FADownload } from '@icongo/fa/lib/FADownload';
import { FACopy } from '@icongo/fa/lib/FACopy';
import { FAHouseChimneyCrack } from '@icongo/fa/lib/FAHouseChimneyCrack';
import { MDFileCopyRound } from '@icongo/md/lib/MDFileCopyRound';
import { SINpm } from '@icongo/si/lib/SINpm';
import { MCGithub } from '@icongo/mc/lib/MCGithub';
import { NotFoundPage } from './NotFound';
import { info } from '../data';

const jsxString = (name: string, prename: string) => `import { ${name} } from '@icongo/${prename}/lib/${name}';

function Demo() {
  return (
    <div>
      <${name} />
    </div>
  )
}`;

const Warpper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Title = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Toolbar = styled.div`
  display: flex;
  gap: 0.6rem;
  a {
    border: 0.1rem solid var(--color-border-muted);
    padding: 0.2rem .5rem;
    border-radius: 0.3rem;
    text-decoration: none;
    transition: all .3s;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    path {
      fill: currentColor;
    }
    &:hover {
      border-color: var(--color-accent-emphasis);
      color: var(--color-accent-emphasis);
    }
    @media (max-width: 680px) {
      span {
        display: none;
      }
    }
  }
`;

const IconView = styled.div`
  box-shadow: 0 1px 3px 0 var(--color-neutral-muted);
  border: 2px solid var(--color-border-muted);
  border-radius: 0.3rem;
  fill: currentColor;
  text-align: center;
  padding: 4rem;
  svg {
    min-width: 16rem;
    min-height: 14rem;
    max-height: 14rem;
    transition: all .3s;
  }
  &:hover svg {
    transform: scale(1.3, 1.3) !important;
  }
`;

const IconViewMini = styled<FunctionComponent<React.HTMLAttributes<HTMLDivElement>>>(IconView)`
  padding: 0;
  svg {
    display: block;
    padding: 0;
    width: 1.8rem;
    height: 1.8rem;
    min-height: 1.8rem;
    min-width: 1.8rem;
  }
  &:hover svg {
    transform: scale(1, 1) !important;
  }
`;

export const IconDetailPage = () => {
  const params = useParams<{ name: string; '*': string }>();
  const filename = params['*'];
  const path = `/icons/${params.name}/${filename}`;
  const [svgString, setSvgString] = useState<string>();

  useEffect(() => {
    fetch(path!).then(response => response.text()).then((str) => {
      setSvgString(str);
    }).catch(() => {
      setSvgString('');
    });
  }, []);

  const copySVGHTML = (evn: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evn.stopPropagation();
    evn.preventDefault();
    copyTextToClipboard(svgString!, () => {
      toast.success(<div>Copied '<b>{filename}</b>' icon HTML code to clipboard</div>, { position: 'top-right' });
    });
    return false
  }
  const repoInfo = info[params.name!] || {}
  const data = info[params.name!]?.names || {};
  let comName = ''
  Object.keys(data).forEach((keyname) => {
    if (filename && data[keyname].includes(filename)) {
      comName = keyname;
    }
  });

  if (!comName) {
    return <NotFoundPage />
  }

  const jsxStr = jsxString(comName, params.name!);
  const copyComName = (evn: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evn.stopPropagation();
    evn.preventDefault();
    copyTextToClipboard(comName!, () => {
      toast.success(<div>Copied '<b>{comName}</b>' name to clipboard</div>, { position: 'top-right' });
    });
    return false
  }
  return (
    <Warpper>
      <Section>
        <Toolbar>
          <Link to={`/icons/${params.name}`}> <FAHouseChimneyCrack /> </Link>
          <a target="__blank" href={`https://www.npmjs.com/package/@icongo/${params.name}`}>
            <SINpm />
          </a>
          <a target="__blank" href={repoInfo.gh}>
            <MCGithub />
          </a>
          <a href={path} download={filename}>
            <FADownload />
            <span>Download SVG</span>
          </a>
          <a href="#" onClick={copySVGHTML}>
            <FACopy />
            <span>Copy SVG HTML</span>
          </a>
          <a href="#" onClick={copyComName}>
            <MDFileCopyRound />
            <span>Copy Name</span>
          </a>
        </Toolbar>
      </Section>
      <IconView dangerouslySetInnerHTML={{ __html: svgString! }} />
      <Title>
        <IconViewMini dangerouslySetInnerHTML={{ __html: svgString! }} />
        {filename}
      </Title>
      <MarkdownPreview source={`\`\`\`html\n${svgString?.replace(/\n+$/g, '')}\n\`\`\``} />
      <MarkdownPreview source={`\`\`\`shell\n$ npm install @icongo/${params.name!} --save\n\`\`\``} />
      <MarkdownPreview source={`\`\`\`jsx\n${jsxStr}\n\`\`\``} />
    </Warpper>
  );
}