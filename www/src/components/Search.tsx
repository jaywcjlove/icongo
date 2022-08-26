import styled from 'styled-components';
import { HISearch } from '@icongo/hi/lib/HISearch';
import { FC, PropsWithRef, useRef } from 'react';

const Search = styled.input`
  width: 100%;
  height: 3.5rem;
  padding: 0.2rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 2%), 0 0 0.5rem 0 rgb(0 0 0 / 1%), 0.25rem 0.5rem 1rem 0 rgb(0 48 111 / 8%);
  font-size: 1.2rem;
  font-weight: 800;
  font-family: geomanistregular,Arial,Helvetica,sans-serif;
  padding-right: 4rem;
  border: 1px solid var(--color-neutral-muted);
`;

const Warpper = styled.div`
  margin: 0 auto 0 auto;
  max-width: 640px;
  width: 100%;
  position: relative;
  @media (max-width: 600px) {
    padding: 0 1.5rem;
  }
`;

const SearchButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 3.5rem;
  padding: 0 0.8rem;
  border-left: 1px solid var(--color-neutral-muted);
  border-radius: 0 0.5rem 0.5rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all .3s;
  @media (max-width: 600px) {
    margin-right: 1.5rem;
  }
  path {
    fill: var(--color-fg-default);
    transition: all .3s;
  }
  &:hover {
    background-color: var(--color-accent-emphasis);
    path {
      fill: var(--color-canvas-default);
    }
  }
`;

interface SearchInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onSearch?: (value: string) => void;
}

export const SearchInput: FC<PropsWithRef<SearchInputProps>> = ({ onSearch, ...props }) => {
  const $ref = useRef<HTMLInputElement>(null)
  return (
    <Warpper>
      <Search ref={$ref} type="text" name="query" {...props} />
      <SearchButton onClick={() => onSearch && onSearch($ref.current?.value || '')}>
        <HISearch width={38} height={38} />
      </SearchButton>
    </Warpper>
  );
}
