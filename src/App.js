import PreLoader from './components/PreLoader';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <PreLoader/>
    <Routes>
      <Route path="/" ></Route>
    </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
