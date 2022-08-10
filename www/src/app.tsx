import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { Layout } from './Layout';
import { SearchPage } from './pages/Search';

const Page = () => (
  <div>Page</div>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/icons" element={<Page />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
}