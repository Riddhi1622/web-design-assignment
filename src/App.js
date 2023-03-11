import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About'
import Services from './Components/Services'
import Tools from './Components/Tools'


function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   
   
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path ='about' element={<About/>}/>
    <Route exact path ='services' element={<Services/>}/>
    <Route exact path ='tools' element={<Tools/>}/> 
   </Routes>
   </BrowserRouter>
  
   </>
  );
}

export default App;
