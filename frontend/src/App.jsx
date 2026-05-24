import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            {/* We will add PetDetails later */}
          </Routes>
        </main>
        <footer className="bg-white border-t border-slate-200 py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center text-slate-500">
            &copy; {new Date().getFullYear()} PetStore. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
