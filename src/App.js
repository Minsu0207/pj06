import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Main from './com/WeatherDay/Main';
import WeatherMain from './com/WeatherDay/WeatherMain';
import WeatherMain2 from './com/WeatherDay/WeatherMain2';


function App() {
  return (
    <>
    <Routes>
      <Route path ='/' element={<Main />} />
      <Route path ='p1' element={<WeatherMain />} />
      <Route path ='p2' element={<WeatherMain2 />} />
    </Routes>
    </>
  );
}

export default App;
