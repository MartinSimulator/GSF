import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Grants from './pages/Grants';
import About from './pages/About';
import GetInvolved from './pages/GetInvolved';
import Transparency from './pages/Transparency';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/grants" element={<Grants />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
