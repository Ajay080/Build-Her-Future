// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/Home/HomePage';
import Footer from './Components/Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import CareerRoadMap from './Pages/CareerRoadMap/CareerRoadMap';

import { BrowserRouter,  Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/CareerRoadMap" element={<CareerRoadMap/>}/>
          <Route path="/Blogs" element={<Blogs/>}/>

        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
