import { Routes, Route } from 'react-router-dom';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Home from '@/pages/home';
import About from '@/pages/about';
import Team from '@/pages/team';
import Reports from '@/pages/reports';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;