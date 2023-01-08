import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import SearchCities from './components/CityAQI/SearchCities';
import GetCurrlocdet from './components/GetCurrlocdet';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <h1>Know Air Quality Index(AQI)</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/getcurrentaqi' element={<GetCurrlocdet />} />
        <Route path='/searchcityaqi' element={<SearchCities />} />
      </Routes>
    </div>
  );
}

export default App;
