
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Upload from './Upload';
import Library from './Library';
import MangaReader from './MangaReader';
import Collaborate from './Collaborate';

export default function App() {
  const user = true; // Placeholder for authentication

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/upload" element={user ? <Upload /> : <Navigate to="/login" />} />
      <Route path="/library" element={<Library />} />
      <Route path="/manga/:id" element={<MangaReader />} />
      <Route path="/collaborate" element={<Collaborate />} />
    </Routes>
  );
}
