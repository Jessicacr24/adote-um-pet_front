import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './reset.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Search from './pages/Search';
import Saves from './pages/Saves';
import Partners from './pages/Partners';
import Vaccination from './pages/Vaccination';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/saves" element={<Saves />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/vaccination" element={<Vaccination />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;