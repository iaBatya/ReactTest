import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddedList from './AddedList';
import AllList from './AllList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/addedlist' element={<AddedList/>}/>
        <Route path='/listall' element={<AllList/>}/>
        <Route path="*" element={<AllList/>}
    />
      </Routes>
    </BrowserRouter>
);

