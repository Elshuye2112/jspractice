
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

import {  Routes, Route } from 'react-router-dom'

function App() {
  return (
   
      <div className='main'>
     
       <Routes>
        
       <Route  path='/' element={<Create/>} />
        
       
        <Route  path='/read' element={<Read/>} />
      

      <Route path='/update' element={<Update/>} />
      <Route path="*" element={<NotFound />} />
       </Routes>

      
        </div>
  
  );
}

export default App;


