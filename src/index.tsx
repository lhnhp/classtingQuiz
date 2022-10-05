import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import AnswerNote from './components/AnswerNote';
import Charts from './components/Charts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/answernote" element={<AnswerNote />} />
            <Route path="/charts" element={<Charts />}/>
            <Route path='*' element={<p>잘못된 접근입니다.</p>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

