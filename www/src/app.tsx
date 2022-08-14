import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { Layout } from './Layout';
import { SearchPage } from './pages/Search';
import { IconsPage } from './pages/Icons';
import { Provider } from './store/context'

export default function App() {
  return (
    <Provider>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/icons/:name" element={<IconsPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
      </Routes>
    </Provider>
  );
}