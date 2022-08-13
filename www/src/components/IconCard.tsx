import { useState } from 'react';
import styled, { css } from 'styled-components';
import Keywords from 'react-keywords';

export const CardItem = styled.div`
  box-shadow: 0 1px 3px 0 var(--color-neutral-muted);
  border: 2px solid var(--color-border-muted);
  border-radius: 5px;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

interface CardWarpperProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  active?: boolean;
}

export const CardWarpper = styled.div<CardWarpperProps>`
  overflow: hidden;
  text-align: center;
  ${CardItem} {
    cursor: pointer;
    transition: all .3s;
    &:active {
      border-color: var(--color-border-muted) !important;
    }
    ${props => props.active && css`
      border-color: var(--color-accent-emphasis) !important;
    `}
  }
`;

export const WarpperIcons = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-columns: max-content;
  grid-template-columns: repeat(auto-fill,minmax(90px, 1fr));
  gap: 15px;
`;

export const IconName = styled.span`
  font-size: 12px;
  overflow: hidden;
`;

interface IconCardProps extends CardWarpperProps {
  name?: string;
  query?: string;
  icon?: React.FunctionComponent<{}>;
}

export const IconCard: React.FunctionComponent<React.PropsWithRef<IconCardProps>> = (props) => {
  const { name, query, icon: Icon, ...other } = props;
  return (
    <CardWarpper {...other}>
      <CardItem>
        {Icon && <Icon />}
      </CardItem>
      <IconName>
        <Keywords value={query}>{name}</Keywords>
      </IconName>
    </CardWarpper>
  );
}

export interface IconsListProps {
  query?: string;
  data?: [string, React.FunctionComponent][];
}

export const IconsList = (props: React.PropsWithChildren<IconsListProps>) => {
  const { data = [], query } = props;
  const [activeIcon, setActiveIcon] = useState<string>();
  return (
    <WarpperIcons>
      {data.map((item, key) => {
        const [name, Com]= item;
        return <IconCard key={key} active={name === activeIcon} onClick={() => setActiveIcon(name)} name={name} query={query} icon={Com} />;
      })}
    </WarpperIcons>
  )
}