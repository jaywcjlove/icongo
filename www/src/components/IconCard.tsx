import React, { useRef } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Keywords from 'react-keywords';
import toast from 'react-hot-toast';
import copyTextToClipboard from '@uiw/copy-to-clipboard'
import { iconsData, searchNames, info } from '../data';
import { BIBxsCopy, BIBxsCloudDownload, BIBxsHomeCircle } from '@icongo/bi';

export const CardItem = styled.div`
  box-shadow: 0 1px 3px 0 var(--color-neutral-muted);
  border: 2px solid var(--color-border-muted);
  border-radius: 5px;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  background-color: var(--color-canvas-card);
  padding: 0 10px;
  img {
    max-width: 100%;
    max-height: 46px;
    min-height: 23px;
    min-width: 23px;
  }
`;

export const IconName = styled.span`
  font-size: 12px;
  overflow: hidden;
`;

interface CardWarpperProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  active?: boolean;
}

const WarpperBtn = styled.div`
  position: absolute;
  margin-top: -12px;
  margin-left: 5px;
  display: flex;
  gap: 5px;
`;

const CopyBtn = styled.div`
  font-size: 12px;
  border: 1px solid var(--color-border-muted);
  background-color: var(--color-canvas-default);
  transition: all .3s;
  padding: 2px 2px;
  display: flex;
  border-radius: 3px;
  display: none;
`;

export const CardWarpper = styled.div<CardWarpperProps>`
  overflow: hidden;
  text-align: center;
  cursor: pointer;
    ${CardItem}, ${IconName} {
      transition: all .3s;
    }
  &:focus {
    ${CardItem}, ${IconName} {
      border-color: var(--color-accent-emphasis) !important;
      color: var(--color-accent-emphasis);
    }
  }
  &:active {
    ${CardItem}, ${IconName} {
      border-color: var(--color-fg-default) !important;
      color: var(--color-fg-default) !important;
    }
  }
  &:hover ${CopyBtn} {
    display: flex;
    &:hover {
      border-color: var(--color-accent-emphasis) !important;
      color: var(--color-accent-emphasis);
      svg {
        fill: var(--color-accent-emphasis);
      }
    }
  }
`;

export const WarpperIcons = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-columns: max-content;
  grid-template-columns: repeat(auto-fill,minmax(90px, 1fr));
  gap: 15px;
`;

interface IconCardProps extends CardWarpperProps {
  prename?: string;
  name?: string;
  /** ik/app.svg */
  path?: string;
  query?: string;
  child?: () => JSX.Element;
}

const Card: React.FC<React.PropsWithRef<IconCardProps>> = (props) => {
  const { name = '', prename = '', path, query = '', child, ...other } = props;
  const navigate = useNavigate();
  const $ref = useRef<HTMLDivElement>(null);
  const copyName = () => {
    copyTextToClipboard(name, () => {
      toast.success(<div>Copied '<b onClick={(evm) =>{}}>{name}</b>' name to clipboard</div>, { position: 'top-right' });
      $ref.current?.focus()
    });
  }
  const handleCopy = (evn: React.MouseEvent<HTMLElement, MouseEvent>) => {
    evn.stopPropagation();
    fetch(path!).then(response => response.text()).then((svgStr) => {
      copyTextToClipboard(svgStr, () => {
        toast.success(<div>Copied '<b>{name}</b>' icon HTML code to clipboard</div>, { position: 'top-right' });
        $ref.current?.focus();
      });
    }).catch(() => {
      toast.error(<div>Failed to copy '<b>{name}</b>' icon HTML</div>, { position: 'top-right' });
      $ref.current?.focus();
    });
  }

  const download = (evn: React.MouseEvent<HTMLElement, MouseEvent>) => {
    evn.stopPropagation();
    const link = document.createElement('a');
    link.href = path!;
    link.download = name;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success(<div>Successfully downloaded '<b>{name}</b>' icon!</div>, { position: 'top-right' });
  }
  return (
    <CardWarpper ref={$ref} {...other} tabIndex={0} onClick={copyName}>
      <WarpperBtn>
        <CopyBtn onClick={handleCopy}>
          <BIBxsCopy width={18} height={18} />
        </CopyBtn>
        <CopyBtn onClick={download}>
          <BIBxsCloudDownload width={18} height={18} />
        </CopyBtn>
        {prename && (
          <CopyBtn onClick={() => navigate(`/icons/${prename}`)}>
            <BIBxsHomeCircle width={18} height={18} />
          </CopyBtn>
        )}
      </WarpperBtn>
      <CardItem>
        <img src={path} />
      </CardItem>
      <IconName>
        {query ? <Keywords value={query}>{name}</Keywords> : name}
      </IconName>
    </CardWarpper>
  );
}

export interface IconsListProps {}

export const IconsList = (props: React.PropsWithChildren<IconsListProps>) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  let data: string[] = [];
  const params = useParams<{ name: string; }>();
  if (params.name) {
    const reName = info[params.name.toLocaleLowerCase()]?.names
    data = Object.keys(reName || {});
    return (
      <WarpperIcons>
        {data.map((name, key) => {
          return (
            <Card key={key} name={name} query={query} path={`/icon/${params.name?.toLocaleLowerCase()}/${reName[name][1]}`} />
          );
        })}
      </WarpperIcons>
    );
  }
  data = []
  if (query.length > 1) {
    searchNames.filter((k) => new RegExp(query || '','ig').test(k)).forEach((name) => {
      if (query) {
        data.push(name)
      }
    });
  }
  return (
    <WarpperIcons>
      {data.map((name, key) => {
        const [prename, basename] = iconsData[name];
        return (
          <Card key={key} name={name} query={query} prename={prename?.toLocaleLowerCase() || ''} path={`/icon/${prename?.toLocaleLowerCase()}/${basename}`} />
        );
      })}
    </WarpperIcons>
  );
}