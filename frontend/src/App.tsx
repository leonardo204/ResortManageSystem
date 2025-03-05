import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Navigate to='/login' replace />} />
      </Routes>
    </Router>
  );
};

export default App;
