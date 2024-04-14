import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListStore from './components/ListStore';
import DetailMenu from './components/DetailMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route path='/grabfood' element={<App />} />
        <Route path='/liststore' element={<ListStore/>} />
        <Route path='/detailmenu' element={<DetailMenu/>} />
        <Route path='/detailmenu' element={<DetailMenu/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


/*//---> đổi màu nền header khi trượt
window.addEventListener('scroll', function() {
  var div = document.getElementById('boxHeader');
  var topOffset = window.scrollY;
  if (topOffset > 0) {
    div.classList.add('scrolled');
  } else {
    div.classList.remove('scrolled');
  }
});

//----> đổi logo
window.addEventListener('scroll', function() {
  var logo = document.getElementById('logo_App');
  var topOffset = window.scrollY;
  if (topOffset > 0) {
    logo.src = 'https://food.grab.com/static/images/logo-grabfood2.svg'; // Thay đổi đường dẫn ảnh khi cuộn trang
  } else {
    logo.src = 'https://food.grab.com/static/images/logo-grabfood-white2.svg'; // Khôi phục ảnh ban đầu khi quay lại đầu trang
  }
});
*/


