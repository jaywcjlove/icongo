import styled from 'styled-components';
import { HISearch } from '@icongo/hi/lib/HISearch';
import { FC, PropsWithRef, useRef } from 'react';

const Search = styled.input`
  line-height: 1.8rem;
  font-size: 1.2rem;
  border-radius: 6px;
  outline: none;
  border: 2px solid var(--color-fg-subtle);
  height: 42px;
  padding: 3px 45px 3px 12px;
  width: 100%;
  &:focus {
    border: 2px solid var(--color-accent-fg);
  }
`;

const Warpper = styled.div`
  margin: 36px auto 0 auto;
  max-width: 360px;
  width: 100%;
`;

const SearchBtn = styled(HISearch)`
  font-size: 29px;
  position: absolute;
  margin-left: -38px;
  margin-top: 6px;
  cursor: pointer;
  path {
    fill: var(--color-fg-default);
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
      <SearchBtn onClick={() => onSearch && onSearch($ref.current?.value || '')} />
    </Warpper>
  );
}
