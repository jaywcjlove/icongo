import { useSearchParams } from 'react-router-dom';
import bsNames from '@svg-to-react-component/bs/lib/names.json';
import { BSBagDash } from '@svg-to-react-component/bs';

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  console.log('query:', BSBagDash,  query)
  return (
    <div>Search Page
      <BSBagDash />
    </div>
  );
}