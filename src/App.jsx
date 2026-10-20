import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CourtsPage from './pages/CourtsPage';
import TeamPage from './pages/TeamPage';
import VenuePage from './pages/VenuePage';
import SponsorsPage from './pages/SponsorsPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="courts" element={<CourtsPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="venue" element={<VenuePage />} />
          <Route path="sponsors" element={<SponsorsPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
