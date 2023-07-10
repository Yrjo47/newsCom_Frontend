import './styles/App.css';
import Home from './pages/Home';
import News from './pages/News';
import Feedback from './pages/Feedback';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/feedback' element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;
