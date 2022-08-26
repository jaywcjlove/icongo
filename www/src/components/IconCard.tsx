import React, { useRef } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Keywords from 'react-keywords';
import toast from 'react-hot-toast';
import copyTextToClipboard from '@uiw/copy-to-clipboard'
import { BIBxsCopy, BIBxsCloudDownload, BIBxsHomeCircle } from '@icongo/bi';
// @ts-ignore
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const CardItem = styled.div`
  box-shadow: 0 1px 3px 0 var(--color-neutral-muted);
  border: 2px solid var(--color-border-muted);
  border-radius: 5px;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background-color: var(--color-canvas-card);
  padding: 0 10px;
  img {
    transition: all .3s;
    transform: scale(1, 1);
  }
  &:hover img {
    transform: scale(2, 2);
  }
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
  border-radius: 4px;
  display: none;
  z-index: 9;
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
    border-color: var(--color-fg-muted);
    background-color: var(--color-border-default);
    svg {
      fill: var(--color-fg-muted);
    }
    &:hover {
      border-color: var(--color-accent-emphasis) !important;
      svg {
        fill: var(--color-accent-emphasis);
      }
    }
  }
`;

interface IconCardProps extends CardWarpperProps {
  prename?: string;
  basename?: string;
  name?: string;
  /** ik/app.svg */
  path?: string;
  query?: string;
  hideName?: boolean;
  child?: () => JSX.Element;
}

export const Card: React.FC<React.PropsWithRef<IconCardProps>> = (props) => {
  const { name = '', prename = '', hideName = true, basename = '', path, query = '', child, ...other } = props;
  const navigate = useNavigate();
  const $ref = useRef<HTMLDivElement>(null);

  const copyName = () => {
    copyTextToClipboard(name, () => {
      toast.success(<div>Copied '<b>{name}</b>' name to clipboard</div>, { position: 'top-right' });
      $ref.current?.focus()
    });
  }
  const handleCopy = (evn: React.MouseEvent<HTMLElement, MouseEvent>) => {
    evn.stopPropagation();
    fetch(path!).then(response => response.text()).then((svgStr) => {
      toast.success(<LazyLoadImage height={80} src={path} alt={name} />, { position: 'bottom-right' });
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
        <LazyLoadImage src={path} alt={name} />
      </CardItem>
      {hideName && (
        <IconName>
          <NavLink to={`/icon/${prename?.toLocaleLowerCase()}/${basename}`}>
            {query ? <Keywords value={query}>{name}</Keywords> : name}
          </NavLink>
        </IconName>
      )}
    </CardWarpper>
  );
}
