import { Route, Routes } from 'react-router-dom';
import AnotherPage from './components/AnotherPage';
import InfoPage from './components/InfoPage';
import HomePage from './components/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/another-page" element={<AnotherPage />} />
        <Route exact path="/info-page" element={<InfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
